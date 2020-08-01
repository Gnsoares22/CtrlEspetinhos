﻿<%@ Control Language="C#" AutoEventWireup="true" CodeFile="CabecalhoGarcom.ascx.cs" Inherits="Cabecalho_CabecalhoGarcom" %>

<link href="../Content/bootstrap.min.css" rel="stylesheet" />
<script src="../Scripts/jquery-3.2.1.min.js"></script>
<script src="../Scripts/bootstrap.min.js"></script>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">CtrlEspetinhos</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li><a href="../../../Paginas/Garçom/Garçom.aspx">Produto</a></li>
                <li><a href="../../../Paginas/Garçom/Espeto/ListaEspetos.aspx">Espeto</a></li>
                <li><a href="../../../Paginas/Garçom/Comandas/Cadastrar.aspx">Comandas</a></li>
              
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="../../../Paginas/LogarSistema.aspx"><span class="glyphicon glyphicon-log-in"></span>Sair do Sistema</a></li>
            </ul>
        </div>
    </div>
</nav>
