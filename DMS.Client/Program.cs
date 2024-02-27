using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<DMS.Client.Components.App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

#region Custom Configuration File
// TODO: Blazor的配置文件会主动传输到前端，这样不安全，需要进行加密处理
// 初步设想为混淆加密，即：文件二进制进行混淆后传输到前端
// 使用C#进行解密而不是js，即使能够读取源文件，也较为困难在web assembly中获取解密函数
var http = new HttpClient()
{
	BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)
};
using var response = await http.GetAsync("CONF");
using var stream = await response.Content.ReadAsStreamAsync();

builder.Configuration.AddJsonStream(stream);
#endregion

builder.Services.AddScoped(sp => http);

builder.Services.AddBlazoredLocalStorage();

var app = builder.Build();

await app.RunAsync();