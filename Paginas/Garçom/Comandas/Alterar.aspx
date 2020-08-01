<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Alterar.aspx.cs" Inherits="Paginas_Garçom_Comandas_Alterar" %>


<%@ Register Src="~/Cabecalho/CabecalhoGarcom.ascx" TagPrefix="uc1" TagName="CabecalhoGarcom" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <script src="../../../Scripts/sweetalert2.min.js.js"></script>
    <link href="../../../Content/sweetalert2.min.css.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/estilo.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />

    <title></title>
</head>
<body>

    <uc1:CabecalhoGarcom runat="server" ID="CabecalhoGarcom" />

    <form id="form1" runat="server">

        <div class="container">

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div class="row">

                <div class="col-md-6">


                    <asp:HyperLink CssClass="btn btn-danger" NavigateUrl="~/Paginas/Garçom/Comandas/ListarComandas.aspx" ID="Button1" runat="server">

                          <span class=" glyphicon glyphicon-list-alt"></span>

                         <strong> Voltar para Lista de Comandas </strong>


                    </asp:HyperLink>

                </div>


            </div>

            <br />
            <br />
            &nbsp;&nbsp;&nbsp;<br />
            <br />

            <div class="col-md-12" style="background-color: #000000; opacity: 0.8;">


                        <div class="col-md-12">


                            <h2 class="text-center">Alterar Comandas </h2>
                            <p class="text-center">&nbsp;</p>


                            <div class="form-group col-md-6">

                                <asp:Label ID="Label3" CssClass="saud" runat="server" Text="Status: "></asp:Label>

                                <asp:DropDownList ID="ddlStatus" CssClass="form-control" runat="server">
                                    <asp:ListItem>Em Produção</asp:ListItem>
                                    <asp:ListItem>Cancelada</asp:ListItem>
                                    <asp:ListItem>Entregue</asp:ListItem>
                                    <asp:ListItem>Finalizada</asp:ListItem>
                                </asp:DropDownList>

                            </div>


                            <div class="form-group col-md-6">

                                <asp:Label ID="Label2" CssClass="saud" runat="server" Text="Avaliacao: "></asp:Label>

                                <asp:DropDownList ID="ddlAvaliacao" CssClass="form-control" runat="server">
                                    <asp:ListItem>Selecione</asp:ListItem>
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                    <asp:ListItem>5</asp:ListItem>
                                    <asp:ListItem>6</asp:ListItem>
                                    <asp:ListItem>7</asp:ListItem>
                                    <asp:ListItem>8</asp:ListItem>
                                    <asp:ListItem>9</asp:ListItem>
                                    <asp:ListItem>10</asp:ListItem>
                                </asp:DropDownList>

                            </div>

                        </div>


                        <div class="col-md-12" style="padding-bottom: 45px;">

                            <div class="col-md-4">

                                <asp:Button CssClass="btn btn-success" ID="btnSalvar" runat="server" Text="Alterar" OnClick="btnSalvar_Click" ValidationGroup="comanda" />

                            </div>

                        </div>

                        <br />

                    </div>
              


            <div class="col-md-12">


            </div>

        </div>
    </form>
</body>
</html>
