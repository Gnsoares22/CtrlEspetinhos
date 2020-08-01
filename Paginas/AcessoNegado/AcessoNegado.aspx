<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AcessoNegado.aspx.cs" Inherits="Paginas_AcessoNegado_AcessoNegado" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:Label ID="Label1" runat="server" Text="Acesso Negado"></asp:Label>
        <br />
        <br />
        <asp:HyperLink ID="HyperLink1"  NavigateUrl="../LogarSistema.aspx" runat="server">Retornar a pagina de login</asp:HyperLink>
    
    </div>
    </form>
</body>
</html>
