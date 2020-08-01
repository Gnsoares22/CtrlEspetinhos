using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Desperdicio
/// </summary>
public class Desperdicio
{
    public int Id { get; set; }
    public espeto.classes.Espetos Espeto { get; set; }
    public int Quantidade { get; set; }
    public DateTime Data { get; set; }
    public int entradadia { get; set; }
    public int saidadia { get; set; }
}