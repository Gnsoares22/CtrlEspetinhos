using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EspetinhoGoiania.Login.Classe
{

    public class Pessoa
    {

        public int Codigo { get; set; }
        public String Nome { get; set; }
        public String Email { get; set; }
        public String Senha { get; set; }
        public char Tipo { get; set; }

        public Pessoa()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }
}