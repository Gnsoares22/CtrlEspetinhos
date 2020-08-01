using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using produto.classes;
using espeto.classes;
using mesa.classes;

namespace comanda.classes
{

    public class Comanda
    {


        public int id { get; set; }
        public double preco { get; set;}
        public String status { get; set;}
        public String avaliacao { get; set; }
        public int proqtd { get; set; }
         
        //relacionamentos
        
            public Mesa mesa { get; set; }
           
 
        public Comanda()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }
}