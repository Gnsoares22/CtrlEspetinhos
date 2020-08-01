using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using compras.classes;
using FATEC;
using System.Data;

namespace compras.persistencia
{

    public class ComprasBD
    {

        //metodos

        //insert 

        public bool Insert(Compras compra)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            string sql = "INSERT INTO tbl_compra(compra_datac, compra_datav, compra_qtd, compra_descricao, valor_compra) VALUES (?datac, ?datav, ?quantidade, ?descricao, ?valor)";
            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?compra_id", compra.compraid));
            objCommand.Parameters.Add(Mapped.Parameter("?datac", compra.Datac));
            objCommand.Parameters.Add(Mapped.Parameter("?datav", compra.Datav));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", compra.compraqtd));
            objCommand.Parameters.Add(Mapped.Parameter("?descricao", compra.descricao));
            objCommand.Parameters.Add(Mapped.Parameter("?valor", compra.compravalor));
  

            objCommand.ExecuteNonQuery();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;
        }

        //Select all

        public DataSet SelectAll()
        {
            DataSet ds = new DataSet();

            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataAdapter objDataAdapter;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_compra", objConexao);
            objDataAdapter = Mapped.Adapter(objCommand);
            objDataAdapter.Fill(ds);

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }

        //select

        public Compras Select(int id)
        {
            Compras obj = null;
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataReader objDataReader;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_compra WHERE compra_id = ?id", objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?id", id));

            objDataReader = objCommand.ExecuteReader();

            while (objDataReader.Read())
            {
                obj = new Compras();
                obj.compraid = Convert.ToInt32(objDataReader["compra_id"]);
                obj.descricao = Convert.ToString(objDataReader["compra_descricao"]);
                obj.compravalor = Convert.ToDouble(objDataReader["valor_compra"]);
                obj.compraqtd = Convert.ToInt32(objDataReader["compra_qtd"]);
                obj.Datac = Convert.ToString(objDataReader["compra_datac"]);
                obj.Datav = Convert.ToString(objDataReader["compra_datav"]);

            }

            objDataReader.Close();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            objDataReader.Dispose();

            return obj;
        }


        //update

        public bool Update(Compras compra)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            string sql = "UPDATE tbl_compra SET compra_descricao=?descricao, compra_qtd=?quantidade, valor_compra=?valor WHERE compra_id=?id";

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?descricao", compra.descricao));
            objCommand.Parameters.Add(Mapped.Parameter("?valor", compra.compravalor));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", compra.compraqtd));
            objCommand.Parameters.Add(Mapped.Parameter("?id", compra.compraid));
        
            objCommand.ExecuteNonQuery();

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;
        }


        public ComprasBD()
        {
            //CONSTRUTOR
        }
    }
}