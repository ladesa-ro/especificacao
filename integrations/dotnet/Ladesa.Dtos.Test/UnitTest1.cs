using Ladesa.Dtos;

namespace Ladesa.Dtos.Test;

public class Tests
{
  [SetUp]
  public void Setup() { }

  [Test]
  public void Test1()
  {
    var arquivo = Arquivo.FromJson("{}");
    System.Console.WriteLine(arquivo);
    Assert.That(arquivo, Is.Not.Null);
  }
}
