using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using comanda.classes;

namespace produto.classes
{
    public class Produto
    {

        public int Codigo { get; set; }
        public String Nome { get; set; }
        public double Valor { get; set; }
        public int Quantidade { get; set; }

        //relacionamento

         public Comanda comanda { get; set; }

        public Produto()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }
}