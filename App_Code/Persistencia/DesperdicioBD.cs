using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FATEC;
using System.Data;

namespace desperdicio.persistencia
{

    public class DesperdicioBD
    {
        public static bool Insert(Desperdicio desp)
        {
            try
            {
                System.Data.IDbConnection objConexao;
                System.Data.IDbCommand objCommand;

                string sql = "INSERT INTO tbl_desperdicio(esp_id, quantidade, des_date, des_entradadia) VALUES (?esp_id, ?quantidade, ?des_date, ?entradadia);";
                sql += "UPDATE tbl_espetos SET esp_quantidade= 0, esp_entradadia = 0 WHERE esp_id=?esp_id;";

                objConexao = Mapped.Connection();
                objCommand = Mapped.Command(sql, objConexao);

                objCommand.Parameters.Add(Mapped.Parameter("?esp_id", desp.Espeto.Codigo));
                objCommand.Parameters.Add(Mapped.Parameter("?des_date", desp.Data));
                objCommand.Parameters.Add(Mapped.Parameter("?quantidade", desp.Quantidade));
                objCommand.Parameters.Add(Mapped.Parameter("?entradadia", desp.entradadia));


                objCommand.ExecuteNonQuery();
                objConexao.Close();
                objCommand.Dispose();
                objConexao.Dispose();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        //selecionar todos

        public DataSet SelectAll()
        {
            DataSet ds = new DataSet();
            System.Data.IDbConnection objConexao;
            System.Data.IDbCommand objCommand;
            System.Data.IDataAdapter objDataAdapter;

            objConexao = Mapped.Connection();
            objCommand = Mapped.Command("SELECT des_id, des_date, des_entradadia, des_saidadia, quantidade, esp_nome FROM tbl_desperdicio inner join tbl_espetos on tbl_desperdicio.esp_id = tbl_espetos.esp_id;", objConexao);
            objDataAdapter = Mapped.Adapter(objCommand);

            objDataAdapter.Fill(ds);
            objConexao.Close();
            objCommand.Dispose();
            objConexao.Dispose();
            return ds;
        }


        //selecionar os espetos mais disperdiçados para fazer o gráfico

        public static DataSet SelecionarQuantidadePorCategoria()
        {
            DataSet ds = new DataSet();
            try
            {
                IDbConnection objConexao;
                IDbCommand objComando;
                IDataAdapter objAdapter;

                objConexao = Mapped.Connection();

                string sql = "select esp_nome, sum(quantidade) as desperdicio from tbl_desperdicio inner join tbl_espetos on tbl_desperdicio.esp_id = tbl_espetos.esp_id group by esp_nome order by desperdicio desc, esp_nome;";


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

    }


}
