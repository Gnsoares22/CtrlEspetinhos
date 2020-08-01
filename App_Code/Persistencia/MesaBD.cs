using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FATEC;
using mesa.classes;
using System.Data;

namespace mesa.persistencia
{

    public class MesaBD
    {

        //métodos

        //insert 


        //selectall

        public DataSet SelectAll()
        {
            DataSet ds = new DataSet();


            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataAdapter objDataAdapter;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_mesas", objConexao);

            objDataAdapter = Mapped.Adapter(objCommand);
            objDataAdapter.Fill(ds);

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }

        //select os parametros da tabela mesa


        public Mesa Select(int id)
        {
            Mesa obj = null;

            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataReader objDataReader;

            objConexao = Mapped.Connection();

            objCommand = Mapped.Command("SELECT * FROM tbl_mesas WHERE mesas_id = ?id", objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?id", id));
            objDataReader = objCommand.ExecuteReader();

            while (objDataReader.Read())
            {
                obj = new Mesa();
                obj.id = Convert.ToInt32(objDataReader["mesas_id"]);
                obj.descricao = Convert.ToString(objDataReader["mesas_descricao"]);

            }

            objDataReader.Close();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            objDataReader.Dispose();
            return obj;
        }



        public MesaBD()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }
}