using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<DMS.Client.Components.Routes>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
var app = builder.Build();

builder.Services.AddScoped(sp =>
{
	return new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) };
});




await builder.Build().RunAsync();