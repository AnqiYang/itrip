-- MySQL dump 10.13  Distrib 5.6.23, for Win32 (x86)
--
-- Host: localhost    Database: itripdb
-- ------------------------------------------------------
-- Server version	5.6.24-log

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
-- Table structure for table `upload`
--

DROP TABLE IF EXISTS `upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload` (
  `username` varchar(15) NOT NULL,
  `spotfood` varchar(50) NOT NULL,
  `pictures` varchar(50) DEFAULT NULL,
  `pvalid` int(11) NOT NULL,
  `description` varchar(3000) DEFAULT NULL,
  `dvalid` int(11) NOT NULL,
  PRIMARY KEY (`username`,`spotfood`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
INSERT INTO `upload` VALUES ('anjunping','youmian','Mypsd_29755_201104181628160002B.jpg',0,'由莜麦加工而成的面粉。经过精细制作成为食品。莜面的营养成份是其它面粉营养成份的七倍以上，可与精面粉媲美。莜面中含有钙、磷、铁、核黄素等多种人体需要的营养元素和药物成份，可以治疗和预防糖尿病、冠心病、动脉硬化、高血压等多种疾病。同时莜面中含有一种特殊物质——亚油酸，它对于人体新陈代谢具有明显的功效。莜面（yóumiàn）是莜麦磨成的面粉，在山西内蒙古地区也是莜麦面食品的统称。12345',0),('tom','ejinahuyanglin','2008112625521691_2.jpg',0,'额济纳胡杨林，弱水河畔、居延海边是胡杨的故乡，这里的39万亩胡杨林是当今世界仅存的三处天然河道胡杨林之一、是阻止巴丹吉林沙漠向北扩散的重要屏障，是中国西部生态的天然宝库……\r\n',0),('tom','reshui','218586_010613572362_2.jpg',0,'宁城热水萧太后温泉度假村位于赤峰市宁城县热水镇，分布面积0.5平方千米，中心孔口水温高达96℃。泉水中富含多种微量元素，对布氏杆菌病、消化道疾病、糖尿病等三十多种疾病均有不同程度的疗效。1681年，清康熙帝视察塞外，曾在此驻跸沐浴，现在其遗址上建起一座“圣泉亭”，为度假村一景。度假村山清水秀，环境优美，建有二十多家不同规模档次的疗养院和宾馆。热水镇被国家建设部列为全国500家城镇建设重点镇，是集疗养、旅游、度假为一体的花园式度假区。\r\n',0),('tom','shaomai','Redocn_2012041604104551.jpg',0,'稍美，是一种在内蒙古西部各城市流传很久、至今不衰的传统风味食品，稍麦是一种面制包馅的笼蒸点心。其外形束折如花，皮薄馅嫩。和中国南方地区的传统小吃“烧卖”外形类似，但是所用馅料不同，内蒙古地区的稍美只用牛羊肉和大葱，南方烧卖馅料种类繁多，不是一种食品。后来又写作“烧麦”、“烧卖”、“稍美”“稍梅”、“烧梅”、“稍卖”等。\r\n',0),('tom','xiangshawan','1658-110ZPZ15990.jpg',1,'响沙湾位于内蒙古达拉特旗境内库布其沙漠东端，是中国最大的沙漠旅游休闲度假地，以“这里的沙子会唱歌”而闻名。人们在沙漠里建造出令人流连忘返的旅游度假天堂，餐饮、住宿、娱乐休闲一应俱全。响沙湾凭借绮丽壮观的沙漠风光、原汁原味的内蒙风情、丰富多彩的娱乐项目吸引了慕名而来的国内外游客。1111111\r\n',1),('tom','xilinguolexilamulun','31-110Q611023155.jpg',0,'锡林郭勒盟拥有美丽的草原自然风光、古朴的蒙古族风情以及独特的生产生活方式，众多的文物古迹、悠久的历史文化和宜人的避暑气候，这里有着骑马、乘驼、射箭、坐勒勒车、牧羊，祭敖包、蒙古族歌舞、服饰表演、体验牧户生产生活等旅游项目，锡林郭勒盟推出了“环锡林浩特天然草原游”、“锡林郭勒国家级草原自然保护区草原生态游”、“乌珠穆沁草原游牧部落特色游”、“阿尔山圣泉康复保健游”、“草原牧羊游”、“锡林郭勒草原民俗风情游”、“草原婚礼游”、“沙源治理游”、“元上都遗址探密游”、“恐龙墓地游”、“中蒙边境游”、“草原那达慕”、“祭敖包”、“森林、沙漠、雪地探险游”，自行车拉力赛、摩托车、汽车越野赛、狩猎、滑冰、滑雪等等特种专项旅游。1111\r\n',0),('tom','youmian','Redocn_2012011510150251.jpg',0,'由莜麦加工而成的面粉。经过精细制作成为食品。莜面的营养成份是其它面粉营养成份的七倍以上，可与精面粉媲美。莜面中含有钙、磷、铁、核黄素等多种人体需要的营养元素和药物成份，可以治疗和预防糖尿病、冠心病、动脉硬化、高血压等多种疾病。同时莜面中含有一种特殊物质——亚油酸，它对于人体新陈代谢具有明显的功效。莜面（yóumiàn）是莜麦磨成的面粉，在山西内蒙古地区也是莜麦面食品的统称。',0);
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-25  0:18:52
