using NJsonSchema.CodeGeneration.CSharp;
using JsonSchema = NJsonSchema.JsonSchema;

Console.WriteLine("@sisgea/spec - dotnet generator tool")
;

var inputPath = Environment.GetEnvironmentVariable("SPEC_JSON_SCHEMA");

if (!File.Exists(inputPath))
{
  throw new Exception("File SPEC_JSON_SCHEMA not found");
}

var outputPath = Environment.GetEnvironmentVariable("SPEC_CHARP_OUTPUT");

if (outputPath == null || outputPath.Length == 0)
{
  throw new Exception("Please provide SPEC_CHARP_OUTPUT.");
}

string json = File.ReadAllText(inputPath);

var schemaFromFile = await JsonSchema.FromJsonAsync(json);
var classGenerator = new CSharpGenerator(schemaFromFile, new CSharpGeneratorSettings
{
  Namespace = "Sisgea.Spec",
  ClassStyle = CSharpClassStyle.Poco,
  HandleReferences = true,
  GenerateJsonMethods = true,
  GenerateOptionalPropertiesAsNullable = true,
  GenerateNativeRecords = true
});


var codeFile = classGenerator.GenerateFile("Dtos");
File.WriteAllText(outputPath, codeFile);