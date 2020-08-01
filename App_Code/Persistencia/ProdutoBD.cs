using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FATEC;
using produto.classes;
using System.Data;

namespace produto.persistencia
{

    public class ProdutoBD
    {

        //métodos

        //insert

        public bool Insert(Produto produto)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            string sql = "INSERT INTO tbl_produto(nome_produto, valor_produto, produto_quantidade) VALUES (?nome, ?valor, ?quantidade)";

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?nome", produto.Nome));
            objCommand.Parameters.Add(Mapped.Parameter("?valor", produto.Valor));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", produto.Quantidade));

            objCommand.ExecuteNonQuery();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;
        }

        //inserir pedido produto

        public bool Vincular(int idproduto, int idmesas, int quantidade)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            string sql = "INSERT INTO tbl_pp(id_produto, mesas_id, pp_quantidade) VALUES (?produto, ?mesas, ?quantidade)";

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?produto", idproduto));
            objCommand.Parameters.Add(Mapped.Parameter("?mesas", idmesas));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", quantidade));

            objCommand.ExecuteNonQuery();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return true;
        }

        // selecionar tudo da tabela pedidoproduto

        public DataSet GetProduto()
        {
            DataSet ds = new DataSet();
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataAdapter objDataAdapter;
            objConexao = Mapped.Connection();

            objCommand = Mapped.Command("SELECT * FROM tbl_pp inner join tbl_produto on tbl_produto.id_produto = tbl_pp.id_produto inner join tbl_mesas on tbl_mesas.mesas_id = tbl_pp.mesas_id", objConexao);

            //objCommand.Parameters.Add(Mapped.Parameter("?produto", produto);

            objDataAdapter = Mapped.Adapter(objCommand);
            objDataAdapter.Fill(ds);
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return ds;
        }


        //selectall

        public DataSet SelectAll()
        {
            DataSet ds = new DataSet();

            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataAdapter objDataAdapter;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_produto", objConexao);
            objDataAdapter = Mapped.Adapter(objCommand);
            objDataAdapter.Fill(ds);

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }


        //select

        public Produto Select(int id)
        {
            Produto obj = null;
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataReader objDataReader;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT * FROM tbl_produto WHERE id_produto = ?id", objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?id", id));

            objDataReader = objCommand.ExecuteReader();

            while (objDataReader.Read())
            {
                obj = new Produto();
                obj.Codigo = Convert.ToInt32(objDataReader["id_produto"]);
                obj.Nome = Convert.ToString(objDataReader["nome_produto"]);
                obj.Valor = Convert.ToDouble(objDataReader["valor_produto"]);
                obj.Quantidade = Convert.ToInt32(objDataReader["produto_quantidade"]);

            }

            objDataReader.Close();
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            objDataReader.Dispose();

            return obj;
        }


        //update

        public bool Update(Produto produto)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            string sql = "UPDATE tbl_produto SET nome_produto=?nome, valor_produto=?valor, produto_quantidade=?quantidade WHERE id_produto=?id";

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?nome", produto.Nome));
            objCommand.Parameters.Add(Mapped.Parameter("?valor", produto.Valor));
            objCommand.Parameters.Add(Mapped.Parameter("?quantidade", produto.Quantidade));
            objCommand.Parameters.Add(Mapped.Parameter("?id", produto.Codigo));

            objCommand.ExecuteNonQuery();

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;
        }


        //delete



        public ProdutoBD()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }
}