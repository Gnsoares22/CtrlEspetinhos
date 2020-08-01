using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using comanda.classes;
using comanda.persistencia;
using System.Data;
using FATEC;
using mesa.classes;
using mesa.persistencia;
using produto.classes;
using espeto.persistencia;
using espeto.classes;
using produto.persistencia;


namespace comanda.persistencia
{

    public class ComandaBD
    {

        //metodos

        //insert

        public int Insert(Comanda comanda)
        {
            int retorno = 0;
            try
            {
                System.Data.IDbConnection objConexao;
                System.Data.IDbCommand objCommand;
                string sql = "INSERT INTO tbl_comandas(com_status, mesas_id, com_datahora) VALUES (?status, ?mesas, ?data)";
                objConexao = Mapped.Connection();

                objCommand = Mapped.Command(sql, objConexao);
                objCommand.Parameters.Add(Mapped.Parameter("?status", comanda.status));
                objCommand.Parameters.Add(Mapped.Parameter("?mesas", comanda.mesa.id));
                objCommand.Parameters.Add(Mapped.Parameter("?data", DateTime.Now));

                objCommand.ExecuteNonQuery();
                objConexao.Close();
                objCommand.Dispose();
                objConexao.Dispose();
                
            }

            catch (MySql.Data.MySqlClient.MySqlException)
            {
                retorno = -1;
            }
            catch (Exception)
            {
                retorno = -2;
            }
            return retorno;
        }


        //inserir um pedido espeto

        public int VincularPedidoEspeto(int idespeto, int peqtd, int com_id)
        {
            int retorno = -2;
            try
            {

                System.Data.IDbConnection objConexao;
                System.Data.IDbCommand objCommand;
                System.Data.IDataReader objDataReader;

                objConexao = Mapped.Connection();

                EspetoBD bd = new EspetoBD();
                Espetos espeto = bd.Select(idespeto);
                decimal valor =  Convert.ToDecimal(espeto.Valor);


                objCommand = Mapped.Command("call prc_espetos(?espeto, ?quantidade, ?com_id, ?valor);", objConexao);
                objCommand.Parameters.Add(Mapped.Parameter("?espeto", idespeto));
                objCommand.Parameters.Add(Mapped.Parameter("?quantidade", peqtd));
                objCommand.Parameters.Add(Mapped.Parameter("?com_id", com_id));
                objCommand.Parameters.Add(Mapped.Parameter("?valor", valor * peqtd));

                objDataReader = objCommand.ExecuteReader();

                while (objDataReader.Read())
                {
                    retorno = Convert.ToInt32(objDataReader["msg"]);
                }


                objDataReader.Close();
                objConexao.Close();


                objCommand.Dispose();
                objConexao.Dispose();
                objDataReader.Dispose();


                return retorno;

            }
            catch (Exception ex)
            {
                return retorno;

            }

        }



        //inserir Pedido Produto


        public int VincularPedidoProduto(int idproduto, int ppquantidade, int com_id)
        {


            int retorno = -2;
            try
            {
                System.Data.IDbConnection objConexao;
                System.Data.IDbCommand objCommand;
                System.Data.IDataReader objDataReader;

                objConexao = Mapped.Connection();

                ProdutoBD bd = new ProdutoBD();
                Produto produto = bd.Select(idproduto);
                decimal valorp = Convert.ToDecimal(produto.Valor) * ppquantidade;

                objCommand = Mapped.Command("call prc_produtos(?produto, ?quantidade, ?com_id, ?valorp); ", objConexao);
                objCommand.Parameters.Add(Mapped.Parameter("?produto", idproduto));
                objCommand.Parameters.Add(Mapped.Parameter("?quantidade", ppquantidade));
                objCommand.Parameters.Add(Mapped.Parameter("?com_id", com_id));
                objCommand.Parameters.Add(Mapped.Parameter("?valorp", valorp));
                objDataReader = objCommand.ExecuteReader();

                while (objDataReader.Read())
                {
                    retorno = Convert.ToInt32(objDataReader["msg"]);
                }

                objDataReader.Close();
                objConexao.Close();

                objCommand.Dispose();
                objConexao.Dispose();
                objDataReader.Dispose();

                return retorno;
            }
            catch (Exception ex)
            {
                return retorno;
            }





        }


        // selectall

        public DataSet SelectAll()
        {
            DataSet ds = new DataSet();
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            System.Data.IDataAdapter objDataAdapter;
            objConexao = Mapped.Connection();

            objCommand = Mapped.Command("select * from tbl_comandas c inner join tbl_mesas m on c.mesas_id = m.mesas_id;", objConexao);
            objDataAdapter = Mapped.Adapter(objCommand);

            objDataAdapter.Fill(ds);

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }

        //selecionar todos os espetos pedidos na comanda

        public DataSet SelectAllComandaEspeto(int com_id)
        {
            DataSet ds = new DataSet();
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            System.Data.IDataAdapter objDataAdapter;
            objConexao = Mapped.Connection();

            objCommand = Mapped.Command("SELECT * FROM tbl_pe p inner join tbl_espetos e on p.esp_id = e.esp_id where com_id=?com_id;", objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?com_id", com_id));
            objDataAdapter = Mapped.Adapter(objCommand);

            objDataAdapter.Fill(ds);

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }


        //selecionar todos os produtos pedidos na comanda

        public DataSet SelectAllComandaProduto(int com_id)
        {
            DataSet ds = new DataSet();
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            System.Data.IDataAdapter objDataAdapter;
            objConexao = Mapped.Connection();

            objCommand = Mapped.Command("SELECT * FROM tbl_pp p inner join tbl_produto e on p.id_produto = e.id_produto where com_id=?com_id;", objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?com_id", com_id));
            objDataAdapter = Mapped.Adapter(objCommand);

            objDataAdapter.Fill(ds);

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }



        //select

        public Comanda Select(int id)
        {
            Comanda obj = null;

            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataReader objDataReader;

            objConexao = Mapped.Connection();

            objCommand = Mapped.Command("SELECT * FROM tbl_comandas WHERE com_id = ?id;", objConexao);
            objCommand.Parameters.Add(Mapped.Parameter("?id", id));
            objDataReader = objCommand.ExecuteReader();

            while (objDataReader.Read())
            {
                obj = new Comanda();
                obj.id = Convert.ToInt32(objDataReader["com_id"]);
                obj.status = Convert.ToString(objDataReader["com_status"]);



            }

            objDataReader.Close();
            objConexao.Close();

            objCommand.Dispose();
            objConexao.Dispose();
            objDataReader.Dispose();

            return obj;
        }


        //update

        public bool Update(Comanda comanda)
        {
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;

            string sql = "UPDATE tbl_comandas SET com_status=?status, com_avaliacao=?avaliacao WHERE com_id=?id";

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command(sql, objConexao);

            objCommand.Parameters.Add(Mapped.Parameter("?status", comanda.status));
            objCommand.Parameters.Add(Mapped.Parameter("?avaliacao", comanda.avaliacao));
            objCommand.Parameters.Add(Mapped.Parameter("?id", comanda.id));

            objCommand.ExecuteNonQuery();

            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();

            return true;
        }


        //Seleciona as notas dos clientes para fazer grafico

        public static DataSet SelecionarNotaPorCategoria()
        {
            DataSet ds = new DataSet();
            try
            {
                IDbConnection objConexao;
                IDbCommand objComando;
                IDataAdapter objAdapter;

                objConexao = Mapped.Connection();

                string sql = "Select com_avaliacao, count(com_avaliacao) as nota from tbl_comandas group by com_avaliacao order by com_avaliacao;";

                objComando = Mapped.Command(sql, objConexao);
                objAdapter = Mapped.Adapter(objComando);
                objAdapter.Fill(ds);

                objConexao.Close();
                objComando.Dispose();
                objConexao.Dispose();
                return ds;

            }
            catch (Exception e)
            {
                ds = null;
                return ds;
            }
        }

        public ComandaBD()
        {
            //
            // TODO: Add constructor logic here
            //
        }
    }
}