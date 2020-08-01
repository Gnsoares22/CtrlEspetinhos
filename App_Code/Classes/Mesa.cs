using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using comanda.classes;


namespace mesa.classes
{

    public class Mesa
    {

        public int id { get; set; }
        public String descricao { get; set; }

        //relacionamentos

            public Comanda comanda { get; set; }


        public Mesa()
        {


        }
    }

}