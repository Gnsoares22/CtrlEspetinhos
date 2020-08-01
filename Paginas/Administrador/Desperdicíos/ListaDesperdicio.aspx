<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ListaDesperdicio.aspx.cs" Inherits="Paginas_Administrador_Desperdicíos_ListaDesperdicio" %>

<%@ Register Src="~/Cabecalho/CabecalhoADM.ascx" TagPrefix="uc1" TagName="CabecalhoADM" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title></title>

    <link href="../../../Content/bootstrap-select.min.css" rel="stylesheet" />
    <link href="../../../Content/bootstrap.min.css" rel="stylesheet" />
    <script src="../../../Scripts/DataTables/dataTables.bootstrap.js"></script>
    <link href="../../../Content/sweetalert2.min.css.css" rel="stylesheet" />
    <link href="../../../font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../../../Scripts/DataTables/buttons.dataTables.min.css" rel="stylesheet" />
    <link href="../../../Scripts/DataTables/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="../../../EstiloPagina/Conteudo.css" rel="stylesheet" />


</head>


<body>

    <uc1:CabecalhoADM runat="server" ID="CabecalhoADM" />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <form id="form1" runat="server" method="post">

        <div class="container" style="background-color: black; opacity: .9; border-radius: 10px; padding: 10px 10px 10px 10px">

            <h2 class="text-center" style="color: whitesmoke; font-family: 'Lobster', cursive;">Lista de Desperdicios</h2>

            <br />

            <br />

            <br />

            <div class="text-center col-xs-12">

                <asp:HyperLink ID="Button" data-toggle="modal" data-target="#exampleModal" CssClass="btn btn-primary btn-lg" runat="server"> 

                    <span class="glyphicon glyphicon glyphicon-ok-sign"></span>

                    Finalizar Dia

                </asp:HyperLink>


                    <asp:HyperLink ID="HyperLink1" NavigateUrl="~/Paginas/Administrador/Desperdicíos/GraficoDesperdicio.aspx" CssClass="btn btn-default btn-lg" runat="server">
                        

                   <span class="glyphicon glyphicon-signal"></span>

                        
                       Gráfico de Desperdicio Total


                    </asp:HyperLink>

                </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div class="col-xs-12">


                <!-- gridview -->

                <div class="table-responsive">

                    <asp:GridView ID="grdDesperdicio" runat="server" AutoGenerateColumns="False" CssClass="tabela table table-hover" BackColor="White" BorderColor="#999999" BorderStyle="Solid" BorderWidth="1px" CellPadding="3" ForeColor="Black" GridLines="Vertical">
                        <AlternatingRowStyle BackColor="#CCCCCC" />
                        <Columns>
                            <asp:BoundField DataField="esp_nome" HeaderText="Espeto">
                                <HeaderStyle CssClass="text-center h4" />
                                <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                            </asp:BoundField>
                            <asp:BoundField DataField="des_date" HeaderText="Data" DataFormatString="{0:dd/MM/yyyy}">
                                <HeaderStyle CssClass="text-center h4" />
                                <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                            </asp:BoundField>
                            <asp:BoundField DataField="des_entradadia" HeaderText="Entrada">
                                <HeaderStyle CssClass="text-center h4" />
                                <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                            </asp:BoundField>
                            <asp:BoundField DataField="des_saidadia" HeaderText="Saida de espetos">
                                <HeaderStyle CssClass="text-center h4" />
                                <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                            </asp:BoundField>
                            <asp:BoundField DataField="quantidade" HeaderText="Desperdicio">
                                <HeaderStyle CssClass="text-center h4" />
                                <ItemStyle HorizontalAlign="Center" CssClass="h4" />
                            </asp:BoundField>

                        </Columns>

                        <FooterStyle BackColor="#CCCCCC" />
                        <HeaderStyle BackColor="Black" Font-Bold="True" ForeColor="White" />
                        <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
                        <SelectedRowStyle BackColor="#000099" Font-Bold="True" ForeColor="White" />
                        <SortedAscendingCellStyle BackColor="#F1F1F1" />
                        <SortedAscendingHeaderStyle BackColor="#808080" />
                        <SortedDescendingCellStyle BackColor="#CAC9C9" />
                        <SortedDescendingHeaderStyle BackColor="#383838" />

                    </asp:GridView>

                </div>
            </div>
        </div>

        <!-- Modal de confirmação de exclusão -->

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel"><strong>Confirmação de finalização de dia </strong></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <h4>Tem certeza que deseja finalizar o dia ?</h4>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                        <asp:Button ID="BtnFinalizardia" OnClick="BtnFinalizardia_Click" CssClass="btn btn-success" runat="server" Text="Fechar dia" />
                    </div>
                </div>
            </div>
        </div>



    </form>

    <br />

    <!-- scripts -->

    <script src="../../../Scripts/jquery-3.2.1.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <script src="../../../Scripts/DataTables/jquery.dataTables.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/dataTables.buttons.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.flash.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/jszip.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/pdfmake.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/vfs_fonts.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.html5.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.print.min.js"></script>
    <script src="../../../Scripts/DataTables/Datatable/buttons.colVis.min.js"></script>
    <script src="../../../Scripts/bootstrap-select.min.js"></script>
    <script src="../../../Scripts/sweetalert2.min.js.js"></script>

    <script>




        $('.tabela').DataTable({
            paging: true,
            searching: true,
            ordering: true,
            dom: 'Bfrtip',
            stateSave: true,

            buttons: [
                {
                    extend: 'print',
                    customize: function (win) {
                        $(win.document.body)
                            .css('font-size', '10pt')
                            .prepend(
                            '<h1 class="text-center"> Espetinho Goiânia </h1></br>'
                            );

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    },
                
                    text: '<i class="fa fa-print"></i>',
                    titleAttr: 'Imprimir',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'copy',
                    text: '<i class="fa fa-copy"></i>',
                    titleAttr: 'Copiar',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fa fa-file-excel-o"></i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'pdf',
                    text: '<i class="fa fa-file-pdf-o"></i>',
                    titleAttr: 'PDF',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                'colvis'
            ],

            language: {
                sProcessing: "A processar...",
                sLengthMenu: "Mostrar _MENU_ registos",
                sZeroRecords: "Não foram encontrados resultados",
                sInfo: "<p> Mostrando de _START_ até _END_ de _TOTAL_ Itens </p>",
                sInfoEmpty: "<p>Mostrando de 0 até 0 de 0 Itens</p>",
                sInfoFiltered: "<p>(filtrado de _MAX_ registos no total)</p>",
                sInfoPostFix: "",
                sSearch: "<h6>Procurar<h6>",
                sUrl: "",
                oPaginate: {
                    sFirst: "Primeiro",
                    sPrevious: "<p>Anterior</p>",
                    sNext: "<p>Seguinte</p>",
                    sLast: "Último",
                },
                buttons: {
                    colvis: 'Selecione colunas',
                    copyTitle: 'Copiar',
                    copySuccess: { 1: "Copiado 1 linha para área de transferência", _: "Copiado %d linhas para área de transferência" }
                }
            }
        });

    </script>

</body>
</html>



