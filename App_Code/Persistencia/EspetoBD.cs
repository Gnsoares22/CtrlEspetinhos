using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using espeto.classes;
using FATEC;
using System.Data;

namespace espeto.persistencia
{

    public class EspetoBD
    {

        //métodos


        //insert

        public bool Insert(Espetos espeto)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            string sql = "INSERT INTO tbl_espetos(esp_nome, esp_valor, esp_quantidade) VALUES (?nome, ?valor, ?quantidade)";

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?nome", espeto.Nome));
            objCommand.Parameters.Add(Mapped.Parameter("?valor", espeto.Valor));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", espeto.Quantidade));

            objCommand.ExecuteNonQuery();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;
        }

        //inserir espeto no banco


        public bool Vincular(int idespeto, int idmesas, int quantidade)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            string sql = "INSERT INTO tbl_pe(esp_id, mesas_id, pe_qtd) VALUES (?produto, ?mesas, ?quantidade)";

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?produto", idespeto));
            objCommand.Parameters.Add(Mapped.Parameter("?mesas", idmesas));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", quantidade));

            objCommand.ExecuteNonQuery();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;

        }

        //seleciona todos os espetos do banco

        public DataSet GetEspeto()
        {
            DataSet ds = new DataSet();
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataAdapter objDataAdapter;
            objConexao = Mapped.Connection();

            objCommand = Mapped.Command("SELECT * FROM tbl_pe inner join tbl_espetos on tbl_espetos.esp_id = tbl_pe.pe_id inner join tbl_mesas on tbl_mesas.mesas_id = tbl_pe.mesas_id", objConexao);

            //objCommand.Parameters.Add(Mapped.Parameter("?produto", produto);

            objDataAdapter = Mapped.Adapter(objCommand);
            objDataAdapter.Fill(ds);
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return ds;
        }


        // select all

        public DataSet SelectAll()
        {
            DataSet ds = new DataSet();

            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataAdapter objDataAdapter;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_espetos", objConexao);
            objDataAdapter = Mapped.Adapter(objCommand);
            objDataAdapter.Fill(ds);

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }


        //select

        public Espetos Select(int id)
        {
            Espetos obj = null;
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataReader objDataReader;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_espetos WHERE esp_id = ?id", objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?id", id));

            objDataReader = objCommand.ExecuteReader();

            while (objDataReader.Read())
            {
                obj = new Espetos();
                obj.Codigo = Convert.ToInt32(objDataReader["esp_id"]);
                obj.Nome = Convert.ToString(objDataReader["esp_nome"]);
                obj.Valor = Convert.ToDouble(objDataReader["esp_valor"]);
                obj.Quantidade = Convert.ToInt32(objDataReader["esp_quantidade"]);

            }

            objDataReader.Close();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            objDataReader.Dispose();

            return obj;
        }


        //update

        public bool Update(Espetos espeto)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            string sql = "UPDATE tbl_espetos SET esp_nome=?nome, esp_valor=?valor, esp_quantidade=?quantidade, esp_entradadia=?entradadia WHERE esp_id=?id";
           

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?nome", espeto.Nome));
            objCommand.Parameters.Add(Mapped.Parameter("?valor", espeto.Valor));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", espeto.Quantidade));
            objCommand.Parameters.Add(Mapped.Parameter("?entradadia", espeto.Entradadia));
            objCommand.Parameters.Add(Mapped.Parameter("?id", espeto.Codigo));

            objCommand.ExecuteNonQuery();

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;
        }


        //delete


        public EspetoBD()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }

}