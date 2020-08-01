using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EspetinhoGoiania.Login.Classe; //importa utilidades da classe Pessoa
using FATEC; // importa utilidades da classe de mapeamento
using System.Data; // responsavel pelos comandos "ds" de dados


namespace EspetinhoGoiania.Login.Persistencia
{


    public class PessoaBD
    {

        //Metodo para autentica o sistema entre o Administrador e Garçom

        public Pessoa Autentica(string email, string senha)
        {

            Pessoa obj = null;

            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand ObjCommand;
            System.Data.IDataReader objDataReader;

            objConexao = Mapped.Connection();
            ObjCommand = Mapped.Command("SELECT * FROM tbl_pessoa WHERE pes_email = ?email and pes_senha = ?senha", objConexao);

            ObjCommand.Parameters.Add(Mapped.Parameter("?email", email));
            ObjCommand.Parameters.Add(Mapped.Parameter("?senha", senha));

            objDataReader = ObjCommand.ExecuteReader();

            while (objDataReader.Read())
            {

                obj = new Pessoa();
                obj.Codigo = Convert.ToInt32(objDataReader["pes_id"]);
                obj.Nome = Convert.ToString(objDataReader["pes_nome"]);
                obj.Email = Convert.ToString(objDataReader["pes_email"]);
                obj.Tipo = Convert.ToChar(objDataReader["pes_tipo"]);

            }

            objDataReader.Close();
            objConexao.Close();

            ObjCommand.Dispose();
            objConexao.Dispose();
            objDataReader.Dispose();

            return obj;

        }

        // Metodo para selecionar as pessoas no banco de dados

            public Pessoa Select(int id) {

            Pessoa obj = null;

            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataReader objDataReader;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_pessoa WHERE pes_id = ?codigo", objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?codigo", id));

            objDataReader = objCommand.ExecuteReader();

            while (objDataReader.Read())
            {

                obj = new Pessoa();
                obj.Codigo = Convert.ToInt32(objDataReader["pes_id"]);
                obj.Nome = Convert.ToString(objDataReader["pes_nome"]);
                obj.Email = Convert.ToString(objDataReader["pes_email"]);
                obj.Senha = Convert.ToString(objDataReader["pes_senha"]);
                obj.Tipo = Convert.ToChar(objDataReader["pes_tipo"]);

            }

            objDataReader.Close();
            objConexao.Close();

            objCommand.Dispose();
            objConexao.Dispose();
            objDataReader.Dispose();

            return obj;

        }



        public PessoaBD()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }
}
