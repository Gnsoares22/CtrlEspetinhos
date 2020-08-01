-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: espetinhogoiania
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_mesas`
--

DROP TABLE IF EXISTS `tbl_mesas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_mesas` (
  `mesas_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mesas_descricao` varchar(45) NOT NULL,
  PRIMARY KEY (`mesas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_mesas`
--

LOCK TABLES `tbl_mesas` WRITE;
/*!40000 ALTER TABLE `tbl_mesas` DISABLE KEYS */;
INSERT INTO `tbl_mesas` VALUES (1,'mesa 1'),(2,'mesa 2'),(3,'mesa 3'),(4,'mesa 4'),(5,'mesa 5'),(6,'mesa 6'),(7,'mesa 7'),(8,'mesa 8'),(9,'mesa 9'),(10,'mesa 10'),(11,'mesa 11'),(12,'mesa 12'),(13,'mesa 13'),(14,'mesa 14'),(15,'mesa 15'),(16,'mesa 16'),(17,'mesa 17'),(18,'mesa 18'),(19,'mesa 19'),(20,'mesa 20'),(21,'mesa 21'),(22,'mesa 22'),(23,'mesa 23'),(24,'mesa 24'),(25,'mesa 25'),(26,'mesa 26'),(27,'mesa 27'),(28,'mesa 28'),(29,'mesa 29'),(30,'mesa 30');
/*!40000 ALTER TABLE `tbl_mesas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-07 21:59:49
