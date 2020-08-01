<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GraficoDesperdicio.aspx.cs" Inherits="Paginas_Administrador_Comandas_Grafico" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <script src="../../../Scripts/bootstrap-select.min.js"></script>
    <script src="../../../Scripts/highcharts.js"></script>
    <script src="../../../Scripts/exporting.js"></script>
    <link href="../../../EstiloPagina/Conteudo.css" rel="stylesheet" />

    <title></title>

</head>

<body>

    <form id="form1" runat="server">

        <br />
        <br />

        <div class="col-md-12 text-center">


            <asp:HyperLink ID="HyperLink1" CssClass="btn btn-lg btn-danger" Text="Voltar para Lista de Desperdicios" NavigateUrl="~/Paginas/Administrador/Desperdicíos/ListaDesperdicio.aspx" runat="server"></asp:HyperLink>

        </div>

        <br />
        <br />
        <br />
        <br />

        <div id="container"  style="min-width: 310px; height: 500px; max-width: 1000px; margin: 0 auto"></div>

        <asp:Literal runat="server" ID="lblScript"> </asp:Literal>


    </form>

</body>

</html>
