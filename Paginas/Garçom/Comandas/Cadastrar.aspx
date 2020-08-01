<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Cadastrar.aspx.cs" Inherits="Paginas_Garçom_Comandas_Cadastrar" %>

<%@ Register Src="~/Cabecalho/CabecalhoGarcom.ascx" TagPrefix="uc1" TagName="CabecalhoGarcom" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">



    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <link href="../../../EstiloPagina/estilo.css" rel="stylesheet" />
    <script src="../../../Scripts/sweetalert2.min.js.js"></script>
    <link href="../../../Content/sweetalert2.min.css.css" rel="stylesheet" />
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

                <div class="col-md-6 text-left">


                    <asp:HyperLink CssClass="btn btn-danger" NavigateUrl="~/Paginas/Garçom/Comandas/ListarComandas.aspx" ID="Button1" runat="server">

                          <span class=" glyphicon glyphicon-list-alt"></span>

                         <strong> Lista de Comandas </strong>


                    </asp:HyperLink>

                </div>


            </div>

            <br />
            <br />
            &nbsp;&nbsp;&nbsp;<br />
            <br />


            <div class="col-md-12" style="background-color: #000000; opacity: 0.8; padding-bottom:40px">
           
                        <div class="col-md-12">


                            <h2 class="text-center">Comandas </h2>
                            <p class="text-center">&nbsp;</p>


                            <div class="form-group col-md-6">

                                <asp:Label ID="Label1" runat="server" CssClass="saud" Text="Mesa: "></asp:Label>

                                <asp:DropDownList CssClass="form-control" ID="ddlMesas" runat="server"></asp:DropDownList>

                                <asp:CompareValidator ID="cvMesa" runat="server" ControlToValidate="ddlMesas" ErrorMessage="Selecione uma mesa" ForeColor="Red" Operator="NotEqual" SetFocusOnError="True" ValueToCompare="Selecione">*</asp:CompareValidator>

                            </div>

                            <div class="form-group col-md-6">

                                <asp:Label ID="Label3" CssClass="saud" runat="server" Text="Status: "></asp:Label>

                                <asp:DropDownList ID="ddlStatus" CssClass="form-control" runat="server">
                                    <asp:ListItem>Selecione</asp:ListItem>
                                    <asp:ListItem>Em Produção</asp:ListItem>
                                    <asp:ListItem>Cancelada</asp:ListItem>
                                    <asp:ListItem>Entregue</asp:ListItem>
                                    <asp:ListItem>Finalizada</asp:ListItem>
                                </asp:DropDownList>

                                <asp:CompareValidator ID="cvStatus" runat="server" ControlToValidate="ddlStatus" ErrorMessage="Selecione o Status" ForeColor="Red" Operator="NotEqual" SetFocusOnError="True" ValueToCompare="Selecione">*</asp:CompareValidator>

                                <br />

                            </div>


                        </div>


                    <div class="col-md-6">

                            <asp:Button CssClass="btn btn-success btn-lg" ID="btnSalvar" runat="server" Text="Cadastrar" OnClick="btnSalvar_Click" />

                    </div>

                <br />

               
                <br />


                <div class="col-md-12">

                    <br />
                    <asp:ValidationSummary CssClass="ac text-center" ID="vsCadastro" runat="server" BackColor="Red" ForeColor="White" />

                </div>

                <br />

                </div>

            </div>

    </form>
</body>
</html>
