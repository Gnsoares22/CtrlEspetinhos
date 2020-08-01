using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace compras.classes
{

    public class Compras
    {
        public int compraid { get; set; }
        public string descricao { get; set; }
        public string Datac { get; set; }
        public string Datav { get; set; }
        public int compraqtd { get; set; }
        public double compravalor { get; set; }
        public double compragasto { get; set; }

        public Compras()
        {
            //construtor
        }
    }

}