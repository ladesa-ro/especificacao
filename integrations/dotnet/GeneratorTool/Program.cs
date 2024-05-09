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
var schemaFromFile = JsonSchema.FromSampleJson(json);
var classGenerator = new CSharpGenerator(schemaFromFile, new CSharpGeneratorSettings
{
  ClassStyle = CSharpClassStyle.Poco,
});


var codeFile = classGenerator.GenerateFile();
File.WriteAllText(outputPath, codeFile);