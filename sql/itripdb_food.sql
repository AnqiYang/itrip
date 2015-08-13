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
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food` (
  `name` varchar(50) NOT NULL,
  `cn_name` varchar(50) NOT NULL,
  `province` varchar(30) NOT NULL,
  `description` longtext NOT NULL,
  `thumbs` int(11) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES ('anhaitusundong','安海土笋冻','fujian','安海土笋冻是福建省传统的汉族小吃。不但滋味浓厚甘美，而且还有非常独到的健保疗病功效，是一种由特有产品加工而成的冻品。相传发明人是民族英雄郑成功。 它含有胶质，主原料是一种蠕虫，经过熬煮，虫体所含胶质溶入水中，冷却后即凝结成块状，其肉清，味美甘鲜。配上好酱油、永春醋、甜辣酱、芥辣、蒜蓉、海蜇及芫荽、白萝卜丝、辣椒丝、番茄片。',0),('badagan','八大干','fujian','闽西八大干是闽西地区有风味特色的八种干制食品，包括连城地瓜干、武平猪胆干、明溪肉脯干、宁化老鼠干、上杭萝卜干、永定菜干、清流笋干及长汀豆腐干',0),('baisemangguo','百色芒果','guangxi','百色芒果，广西百色市所辖12个县（区）芒果的统称，是国家农产品地理标志登记产品 。[1]?百色右江河谷是全国三大“天然温室”之一，属南亚热带季风气候区，照时间长，气候湿润，降水充足，具有得天独厚的芒果种植气候条件，是我国最重要芒果产地之一。',0),('baizusandaocha','白族三道茶','yunnan','岁月蹉跎，沧海桑田，茶饮在大理逐步发展完善，并以一种崭新的方式呈现，“三道茶”这一独特的茶道被赋予了更多的文化内涵。“三道茶”第一道为“苦茶”，制作时，先将水烧开，由司茶者将一只小砂罐置于文火上烘烤。待罐烤热后，即取适量茶叶放入罐内，并不停地转动砂罐，使茶叶受热均匀，待罐内茶叶转黄，茶香喷鼻，即注入已经烧沸的开水。少顷，主人将沸腾的茶水倾入茶盅，再用双手举盅献给客人。因此茶经烘烤、煮沸而成，看上去色如琥珀，闻起来焦香扑鼻，喝下去滋味苦涩，通常只有半杯，一饮而尽。第二道茶，称之为“甜茶”。当客人喝完第一道茶后，主人重新用小砂罐置茶、烤茶、煮茶，并在茶盅里放入少许红糖、乳扇、桂皮等，这样沏成的茶，香甜可口。第三道茶是“回味茶”，其煮茶方法相同，只是茶盅中放的原料已换成适量蜂蜜，少许炒米花，若干粒花椒，一撮核桃仁，茶容量通常为六七分满。这杯茶，喝起来甜、酸、苦、辣，各味俱全，回味无穷',0),('banli','板栗','hebei','河北板栗主要产于河北省北部的燕山山区[1] 。河北板栗以颗粒饱满、香甜、皮薄、适于糖炒等特点著称于世，在日本、香港、澳门等国家和地区以“天津甘栗”之名而久负盛誉，是河北省出口农副产品中具有较大优势的土特产品之一。其产量、出口量和质量，均居全国第一位。河北板栗可生吃熟食，还可以其为原料加工成栗子鸡罐头、栗子羹、巧克力、代乳粉、栗子蜜饯等风味食品，还可做各种糕点的馅料。',0),('beijingkaoya','北京烤鸭','beijing','烤鸭是具有世界声誉的北京著名菜式，由中国汉族人研制于明朝，在当时是宫廷食品。用料为优质肉食鸭北京鸭，果木炭火烤制，色泽红润，肉质肥而不腻，外脆里嫩。北京烤鸭分为两大流派，而北京最著名的烤鸭店也即是两派的代表。它以色泽红艳，肉质细嫩，味道醇厚，肥而不腻的特色，被誉为“天下美味”。',0),('beizi','焙子','innermongolia','焙子是呼和浩特地区特有的小吃，是回族面点名品。焙子喷香耐饥，便于携带，易于消化又经济实惠。有白焙子、咸焙子、甜焙子。形状有圆的、方的、三角的和牛舌形的等等。都是小麦面发酵，兑碱烤制而成的。外干脆内暄软，有浓浓的小麦面香味儿。是早点中最广泛，最经常的主流食品。也是旅行最佳食品，常配以咸菜食用。\r',6),('bingtanghulu','冰糖葫芦','heilongjiang','冰糖葫芦又叫糖葫芦，在东北地区被叫作糖梨膏，在天津被叫作糖墩儿，在安徽凤阳被叫作糖球。冰糖葫芦是中国汉族传统小吃，它是将野果用竹签串成串后蘸上麦芽糖稀，糖稀遇风迅速变硬。北方冬天常见的小吃，一般用山楂串成，糖稀被冻硬，吃起来又酸又甜，还很冰。',0),('boluofan','菠萝饭','yunnan','菠萝饭，又叫凤梨饭，营养全面，富含维生素及蛋白质，有助于提高记忆力；形式可爱，色彩丰富，香甜可口，在考试前夕能帮助精神压力大的孩子增加食欲、促进消化。',0),('chaoxianlengmian','朝鲜冷面','jilin','朝鲜冷面（俗称朝鲜面、韩国冷面） 是驰名国内外的一种深受人们喜欢的传统民族食品。其中尤以荞麦面冷面为著称。一般用牛肉汤或鸡汤，佐以辣白菜、肉片、鸡蛋、黄瓜丝、梨条等。食用时，先在碗内放少量凉汤与适量面条，再放入佐料，最后再次浇汤。其面条细质韧，汤汁凉爽，酸辣适口。',0),('chashaobao','叉烧包','xianggang','叉烧包是广东省具代表性的汉族传统名点之一，是粤式早茶的“四大天王（虾饺、干蒸烧卖、叉烧包、蛋挞）”之一。叉烧包是因面皮内包入叉烧肉馅，故名。叉烧包的面皮是用北方常用的发酵面团经过改进而成的。包制时要捏制成雀笼形，因为发酵适当，蒸熟后包子顶部自然开裂，实际上一种带有叉烧肉馅的开花馒头。',0),('chenchangyinmahua','陈昌银麻花','chongqing','陈昌银麻花俗称陈麻花，味道酥软，口味独特，如今几乎成为了重庆磁器口古镇的代名词，也成了重庆特色小吃的典范代表，成为了重庆的一张名片。先后获得了“中国名小吃”、“重庆特产”、“重庆名点”等称号。',0),('chongcao','虫草','xizang','冬虫夏草又名虫草，是我国民间惯用的一种名贵滋补药材，其营养成分高于人参，可入药，也可食用，是上乘的佳肴，具有很高的营养价值。冬虫夏草可以增强机体的免疫力，滋补肺肾，对肺癌、肝癌等有明显的抑制作用。在临床上对肺虚久咳，气喘，肺结核咯血，盗汗，肾虚腰膝酸痛，阳痿遗精，神经衰弱及化疗、放疗后的红细胞下降都有疗效',0),('chongqinghuoguo','重庆火锅','chongqing','重庆火锅，又称为毛肚火锅或麻辣火锅，是汉族传统饮食方式，起源于明末清初的重庆嘉陵江畔、朝天门等码头船工纤夫的粗放餐饮方式，原料主要是牛毛肚、猪黄喉、鸭肠、牛血旺等',0),('choudoufu','臭豆腐','hunan','臭豆腐，又名臭干子。其名虽俗气、却外陋内秀、平中见奇、源远流长，是一种极具特色的汉族传统小吃，古老而传统，一经品味，常令人欲罢不能，一尝为快。在中国以及世界各地的制作方式和食用方式均存在地区上的差异，南京、长沙的臭豆腐干相当闻名，但其制作以及味道均差异甚大。但都是闻起来臭，吃起来香气四溢，这是臭豆腐的特点',0),('chuanbeiliangfen','川北凉粉','sichuan','川北凉粉，原为农舍小食，距今已有90多年历史。川北凉粉自清末问世以来，以其独具红辣味醇、鲜香爽口的川味风格饮誉巴蜀，流传至今。当时，原南充县江村坝农民谢天禄，在中渡口搭棚卖担担凉粉，他的凉粉制作精细，从磨粉搅制到调料、配味都有独到之处，行人品尝后无不称道，谢凉粉便有了名气。其后，农民陈洪顺悉心研究谢凉粉制作工艺，取其所长并加以改进，凉粉制作工艺得到进一步完善。他选用新鲜白豌豆用小磨磨细，十分讲究搅制火候、所作凉粉质细柔嫩，筋力绵软，明而不透，细而不断，调料配味，更具匠心。不到一年，陈凉粉便名扬川北一带，“川北凉粉”也不胫而走。至今南充市和成渝等地的一些凉粉店都仍以“川北凉粉”为招牌，生意兴隆，火爆不衰。老一辈无产阶级革命家朱德、罗瑞卿生前回南充视察工作时，就曾特意品尝了川北凉粉。过去卖凉粉，多是挑着担儿卖，或在街边，或在十字路口，担儿一放，四面八方的顾客就来了。一般只卖成品凉粉，吃辣、吃酸，自己加佐料拌。要吃，也只有到大餐馆的筵席上品味儿了。',0),('dachangbaoxiaochang','大肠包小肠','taiwan','台湾美食大肠包小肠的糯米肠、香肠，通常都先经过炭烤，而糯米肠切开后，也会再涂抹酱油膏等酱料。是台湾1990年代兴起的一种特殊小吃，说穿了很简单，就是将体积较大的糯米肠切开后，再夹住体积较小的台式香肠，即成为“大肠包小肠”，与美国的热狗有异曲同工之妙。',0),('dalianhaixian','大连海鲜','liaoning','“海鲜”，古称“海错”，意谓海中产物，错杂非一。追溯如东海鲜风味菜品的源头，虽无确切的文字依据，但根据考古学家的考证，至少在距今4000－6000年前的新石器时代，人类已懂得采拾贝类以供食用，而且已有熟食加工了。翻开烹饪古籍资料，发现有关海鲜的记载主要有三个方面，一是饮食养生，二是烹饪技巧，三是海鲜菜品。尤以海鲜菜品的记载最为丰富。据史料查实，传统海鲜饮食烹制、调味方法、用料组合以及对火候的把握，都已自成一体。',0),('dandanmian','担担面','sichuan','\"担担面（Noodles, Sichuan Style），汉族特色面食。著名的四川小吃，源起挑夫们在码头挑着担担卖面，所以名为担担面。用面粉擀制成面条，煮熟，舀上炒制的猪肉末而成。成菜面条细薄，卤汁酥香，咸鲜微辣，香气扑鼻，十分入味。此菜在四川广为流传，常作为筵席点心。\"',0),('daoxiaomian','刀削面','shanxi','刀削面，是山西的汉族传统面食，为“中国十大面条”之一[1]?，流行于北方。操作过程：将面粉和成团块状，左手举面团，右手拿弧形刀，将面一片一片地削到开水锅内，煮熟后捞出，加入臊子、调料食用，以山西大同刀削面最为著名。山西刀削面因其风味独特，驰名中外。刀削面全凭刀削，因此得名。用刀削出的面叶，中厚边薄。棱锋分明，形似柳叶；入口外滑内筋，软而不粘，越嚼越香，深受喜食面食者欢迎。它与北京的炸酱面、河南的烩面、湖北的热干面、四川的担担面，同称为中国五大面食，享有盛誉',0),('dapanji','大盘鸡','xinjiang','新疆大盘鸡是新疆地区名菜，来源说法多种，真实的来源已无法考究，大约起源于80年代后期，主要用料为鸡块和土豆块，配皮带面烹饪而成。菜品色彩鲜艳，有爽滑麻辣的鸡肉和软糯甜润的土豆，辣中有香，粗中带细，而且经济实惠，亲朋聚会食用尚佳。',0),('dayanmian','大堰面','qinghai','很好很好很好很好吃。。。。。',0),('dengyingniurou','灯影牛肉','sichuan','据传，此菜是八十多年前，梁平县一刘姓艺人来达州以做腌卤牛肉谋生，但生意萧条，只好锐意求新，创制成一种薄片状的牛肉干。每当黄昏来临，他就在闹市设摊，专售此种牛肉干。为招来顾客，特在食摊前张一又大又薄的牛肉片，后面点一盏油灯，映得牛肉片又红又亮，灯影依稀可见，十分吸引过路行人。尝之，麻辣脆鲜，人们呼之为“灯影牛肉”。从此，远近传名，生意越做越兴旺。流传至今，名不虚传。',0),('doufunao','豆腐脑','hubei','豆腐脑和豆花都是做豆腐的中间产物，成分上并没有太大区别。豆腐脑是最先出来的，比较嫩软，用筷子难以夹起，需用汤勺盛用；等到豆腐脑再凝固一点，就是豆花，与豆腐脑相比口感凝滑，可以用筷子夹起来吃；豆花放入模具里面压实更加凝固之后就是豆腐了',0),('eluosimeishi','俄罗斯美食','heilongjiang','俄罗斯人比较讲究饮食，菜肴的品种丰富多彩，“俄式大餐”在世界上很有名气，到俄罗斯来一定要品尝俄餐。珍贵的鱼子酱，正宗的罗宋汤，还有传统小煎饼，都是非常有民族特色的。通常在俄罗斯餐桌上最常见的就是各种各样的肉类食品，几乎每餐都会有牛肉、羊肉、牛排、香肠等。',0),('erkuai','饵块','yunnan','饵块为云南特有，是大理最著名的名特小吃之一，也是昆明地区常见的传统食品之一。饵块系用明最著名的名特小吃之一，也是大理地区常见的传统食品之一。饵块系用优质大米加工制成，其制作过程是将大米淘洗、浸泡、蒸熟、冲捣、揉制成各种形状。一般分为块、丝、片三种。制作方法烧、煮、炒、卤、蒸、炸均可，风味各异，久食不厌。云南十八怪中就有一怪：米饭饼子烧饵块。',0),('fenglisu','凤梨酥','taiwan','凤梨酥相传最早起源于三国时期，其凤梨闽南话发音又称“旺来”，象征子孙旺旺来的意思，而凤梨亦是台湾人拜拜常用的贡品，取其“旺旺”“旺来”之意，所以在当代台湾婚礼习俗中，也是广为应用，深受民众喜爱。',0),('fengweikaolu','风味烤卤','jiangxi','《煎烤卤酱菜》中有168道美味菜肴、58个健康忠告、42条烹调技巧。其中主要有煎出脆爽好味道、港式煎藕合、煎酿鲜番茄、香煎甘笋饼、煎土豆饼、冰花水煎包、生煎五花肉、香煎小排、黑椒煎肥牛饼、柠汁可乐煎鹅脯等。',0),('goubangzixunji','沟帮子熏鸡','liaoning','熏鸡是一道色香味俱全的汉族名肴，属于鲁菜，川菜或湘菜。是指经过食品五味五香等气味熏陶所成的鸡。熏鸡所用的材料是全鸡，即一整只鸡。熏鸡与烤鸡的区别在于：传统的烤鸡在烧烤时大部分与烧烤道具是直接接触的，这样一来，容易让鸡肉受热不均匀；而熏鸡就不同，熏鸡因受到五香五味的气味熏陶，说白了也就是热气，在熏陶时受热时均匀的，并且保证鸡肉原生态的气味不外露，还保存了完整的一只鸡，很有艺术性，更受食客欢迎。用一句美妙的话叫做：肥水不流外人田',0),('gourouhuoguo','狗肉火锅','jilin','狗肉火锅以狗肉为制作主料，狗肉火锅的烹饪技巧以火锅为主，口味属于咸鲜。火锅肉香不腻，瘦而不柴，汤鲜爽口，营养丰富。冬吃驱寒，夏吃避暑，滋补强身，延年益寿',0),('guilinmifen','桂林米粉','guangxi','桂林米粉是历史悠久的小吃。以其独特的风味远近闻名。其做工考究，先将上好的早籼米磨成浆，装袋滤干，揣成粉团煮熟后压榨成圆根或片状即成。圆的称米粉，片状的称切粉，通称米粉，其特点是洁白、细嫩、软滑、爽口。其吃法多样。三味粉屋认为，制作最最讲究卤水的制作，其工艺各家有异，大致以猪、牛骨、罗汉果和各式佐料熬煮而成，香味浓郁。卤水的用料和做法不同，米粉的风味也不同。大致有生菜粉、牛腩粉、三鲜粉、原汤粉、卤菜粉、酸辣粉、马肉米粉、担子米粉等',0),('guobaorou','锅包肉','jilin','锅包肉是一道东北风味菜，即将猪里脊肉切片腌入味，裹上炸浆下锅炸至金黄色捞起，再下锅拌炒勾芡即成。成菜色泽金黄，口味酸甜。',0),('guoqiaomixian','过桥米线','yunnan','过桥米线汤是用大骨、老母鸡、云南宣威火腿经长时间熬煮而成的。过桥米线由四部分组成：一是汤料覆盖有一层滚油；二是佐料，有油辣子、味精、胡椒、盐；三是主料，有生的猪里脊肉片、鸡脯肉片、乌鱼片，以及用水过五成熟的猪腰片、肚头片、水发鱿鱼片；辅料有来过的豌豆尖、韭菜，以及芫荽、葱丝、草芽丝、姜丝、玉兰片、氽过的豆腐皮；四是主食，即用水略烫过的米线。鹅油封面，汤汁滚烫，但不冒热气。',0),('hainanmifen','海南米粉','hainan','海南粉是海南省最具特色的汉族小吃，属于海派菜。该小吃流传历史久远，在海南岛北部的海口市、定安县和澄迈县的市镇居民中食用比较普遍，而且是节日喜庆必备的象征吉祥长寿的珍品。多味浓香，柔润爽滑，刺激食欲，故多吃而不腻，爱吃辣的加一点辣椒酱则更起味，吃到末尾剩下少量粉时，加进一小碗热腾腾的海蚌汤掺和着吃，更是满口喷香，回味无穷。',0),('haixian','海鲜','hainan','“海鲜”，古称“海错”，意谓海中产物，错杂非一。追溯如东海鲜风味菜品的源头，虽无确切的文字依据，但根据考古学家的考证，至少在距今4000－6000年前的新石器时代，人类已懂得采拾贝类以供食用，而且已有熟食加工了。翻开烹饪古籍资料，发现有关海鲜的记载主要有三个方面，一是饮食养生，二是烹饪技巧，三是海鲜菜品。尤以海鲜菜品的记载最为丰富。据史料查实，传统海鲜饮食烹制、调味方法、用料组合以及对火候的把握，都已自成一体。',0),('heziba','盒子粑','guizhou','盒子粑是一种油炸食品，是黔西南州的一种小吃，远近闻名，现做现炸现卖，盒子粑外壳酥脆，里面又软又糯，吃完满口留香。',0),('hongchang','红肠','heilongjiang','红肠，也称里道斯，是一种原产于立陶宛，用猪肉和淀粉等材料加工制作的香肠。哈尔滨特产，源自俄国，是中国有名的特产之一，颜色火红得名。味道醇厚、鲜美。在全国各地均有销售。内白块为肥肉，熏制后便嚼劲十足。',0),('huimian','烩面','hubei','烩面的精华全在于汤，汤用上等嫩羊肉、羊骨(劈开，露出中间的骨髓)一起煮五个小时以上，先用大火猛滚再用小火煲，其中下七八味中药，骨头油都熬出来了，煲出来的汤白白亮亮，犹如牛乳一样，所以又有人叫白汤。下面时，锅内放原汁肉汤，将面拉成薄条入锅，辅料以海带丝、豆腐丝、粉条、香菜、鹌鹑蛋、海参、鱿鱼等，上桌时外带香菜、辣椒油、糖蒜等小碟。',0),('hulatang','胡辣汤','hubei','胡辣汤，又名糊辣汤，起源于河南中部，尤以周口西华县逍遥镇胡辣汤最为出名。是中国北方早餐中常见的传统汤类名吃。由多种天然中草药按比例配制的汤料在加入胡椒和辣椒又用骨头汤做底料的胡辣汤，其特点是汤味浓郁、汤色靓丽、汤汁粘稠，香辣可口，十分适合配合其它早点进餐。目前，已经发展成为河南及河南周边省份都喜爱和知晓的小吃之一。',0),('huoguo','火锅','sichuan','火锅，古称“古董羹”，因食物投入沸水时发出的“咕咚”声而得名，它是中国独创的美食，历史悠久。据考证，东汉时期即有火锅，唐代白居易的《问刘十九》诗：“绿蚁新醅酒，红泥小火炉。晚来天欲雪，能饮一杯无？”就惟妙惟肖地描述了当时吃火锅的情景。到宋代，火锅的吃法在民间已十分常见，南宋林洪的《山家清供》食谱中，便有同友人吃火锅的介绍。元代，火锅流传到蒙古一带，用来煮牛羊肉。至清代，火锅不仅在民间盛行，而且成了一道著名的“宫廷菜”，用料是山鸡等野味。',0),('hupilazi','虎皮辣子','qinghai','热锅倒油，热至三成时放入花椒粒，炸出花椒油，待花椒变黑后捞出。开大火下青椒段，两面煎过，我煎得时间长，直到青椒段变蔫，放入蒜片葱姜粒，盐、糖翻炒，再放入味精，关火，出锅前淋些醋。即可',0),('jianbingjuandacong','煎饼卷大葱','shandong','煎饼卷大葱是山东省汉族传统名吃。汉族特色面食，是山东的代表食物。由面粉和大葱制成。洗净蘸上大酱用刚烙好的煎饼卷着吃，辛香辣伴着甜酱的味道',0),('jiangbanya','酱板鸭','hunan','肝去火，健体美颜，益气养血，除湿去烦，开胃健脾，醒目安神，活血化淤，兹阴益肾之功效，深受人们青睐，酱板鸭即可作为休闲小吃，又可作为洒席上的特色菜肴，开袋即食可品尝冷食的鲜美，加热可享受传统热食的风味，是四季养生保健、宴请宾朋尝鲜、走亲访友馈赠、看望病人、孝敬长辈的首选上乘美食佳肴。',0),('jiangjinmihuat','江津米花糖','chongqing','江津米花糖，因产于重庆江津区而得名，是重庆市的著名汉族小吃之一。以优质糯米、核桃仁、花生仁、芝麻、白糖、动植物油、饴糖、玫瑰糖等为原料，经10余道工序精工制成。产品洁白晶莹，香甜酥脆，爽口化渣，甜而不腻，营养丰富，有滋阴补肾、开胃健脾等功效。江津米花糖历史悠久，销往北京、广州、深圳、上海、昆明、新疆等234个城市，还远销美国、新西兰等国家和地区，深受各地消费者的喜爱。',0),('jiangximifen','江西米粉','jiangxi','江西米粉是江西省著名的汉族小吃。由水和大米制作而成，经过晒干成米粉干，为江南美食，富含淀粉，矿物质，各种人体所需维生素等。具有嚼劲实足、爽口、辣味等特点。主要流行于江西、广东、湖南、广西等地。',0),('jiayuguankaorou','嘉峪关烤肉','gansu','烤肉在嘉峪关有着悠久的历史，早在东汉就已经出现。考古专家在魏晋六号墓前室东壁和前室西壁上，均发现了绘有烤肉串的画像砖。画像砖上的人物用两个叉状的工具穿肉，并放在鼎上烧烤。从这些砖画可以看出，嘉峪关地区的人们从当时就开始食用烤肉了。嘉峪关的烤羊肉在选料时特别讲究，羊肉必须是一年内的羊羔肉；加料时不可加多也不可加错；烤熟后的羊肉色泽酱红、麻辣鲜香、油而不腻、外酥里嫩。嘉峪关烤肉现切、现穿、现烤，在吃法上不仅仅限于烤羊肉，还有烤羊排、烤羊腿、烤羊肚、烤羊蹄、烤羊皮、烤羊头等等，这些特点都是嘉峪关烤肉与新疆烤肉的不同之处。',0),('jidanlaozao','鸡蛋醪糟','shanxi','蛋醪糟是太原的汉族特色小吃”尽管全国不少地方都有鸡蛋醪糟，但味道大不相同。相传赵匡胤弃文习武，东渡黄河来到绛州，无钱无粮饥饿难耐。店家看他气宇不凡，做醪糟给他。赵匡胤不知何物，店家说：“糟汤而已”。后来赵匡胤做了皇上，思念“糟汤”，请店家赴京再制，并说“糟汤酸甜爽口，酒香沁脾，以后就改叫醪糟吧。',0),('jinzhoushaokao','锦州烧烤','liaoning','烧烤（barbecue），可能是人类最原始的烹调方式，是以燃料加热和干燥空气，并把食物放置于热干空气中一个比较接近热源的位置来加热食物。一般来说，烧烤是在火上将食物（多为肉类）烹调至可食用，因此台湾亦有称此为烤肉；现代社会，由于有多种用火方式，烧烤方式也逐渐多样化，发展出各式烧烤炉、烧烤架、烧烤酱等。',0),('jipai','鸡排','jiangsu','新食界小米鸡排，被甲子餐饮引进来之后，是现在小吃店里很流行的一种油炸类食品，香味可谓是十里飘香，香脆就是小米鸡排的代名词。一种十分美味的食品，呈米白色，上有“面包渣”似的小面团。里是鸡胸片成的肉片，须选上等淀粉将胸片肉与面渣相互结合，再过一遍纯豆油，变成“排”似的鸡胸肉。用铁板烧烤，大约5分钟左右即可熟，再将朝天椒榨成的油与风宁大酱做成的辣酱过一遍，辅以作料等，便成了外焦里嫩，香味可口的小派鸡排。',0),('jiujiangchabing','九江茶饼','jiangxi','说到茶饼，许多爱茶喜茶的人，就会想到制成饼状的茶叶，可我要说的九江的茶饼。却是当地特有的一种茶后点心。九江茶饼是要配茶吃的，如沏的庐山云雾，当然要配“云雾”馅的茶饼，小姑娘们喜欢喝茉莉花茶，那就可以吃“茉莉花”味道的茶饼……茶与茶饼相得益彰，增色添香。我曾经问一个茶友幸福是什么，他笑着说：“幸福，就是茶后吃一个茶饼，或吃完茶饼，喝上一口茶。单喝茶，再好的茶，总觉得有些寡淡。茶后吃一个茶饼，或吃饼时喝上一口茶。 九江茶饼是江西四大糕点之一，采用传统配方；它选用当地茶油、本地麦面、坡地黑芝麻、百年桂花为主要原料。采用传统工艺和现代技术研制而成。宋朝诗人苏东坡曾赋诗赞誉：“小饼如嚼月，中有酥和饴。”其色泽金黄，具有小而精，素以薄而脆，酥而甜，香而美的特点。由于散发着茶油的清香，丹桂的芳香及纯碱、苏打的奇香，故被人们称为“四香合一”的茶食精点。其营养丰富，易消化，老少皆宜，久食易色，已成为旅游市场中最佳食品之一，浔阳楼茶等品牌的茶饼生产优秀企业。',0),('jiupianer','揪片儿','shanxi','揪片又称掐疙瘩，揪片儿，撅疙瘩，是山西晋中民间传出的一种汉族风味面食。 面和好后，撤成面片切成一寸多宽的条，用手一片一片揪入开水锅里（大小与手指头肚相同），煮熟后配上各种浇头食用。这种面食做法简单，吃着筋滑，适于青壮年吃',0),('jiuquanxingpicha','酒泉杏皮茶','gansu','杏皮水杏皮水是杏皮水是杏皮茶的俗称。是甘肃敦煌当地招牌饮料，用当地的李广杏为原料，用杏皮熬制而成，冰镇后口感酸甜，解渴。和北京酸梅汤味道有异曲同工之秒。适用于口燥咽干、肺燥干咳、喘促气短等症。用于肺结核的潮热、阴虚所致的五心烦热，均可收到疗效。青杏的果肉对治疗菌痢、肠炎效果好。凡津液不布于口、口干烦渴者宜食鲜杏。煮杏加蜜作脯，有润肺止咳定喘功效。杏仁的营养更丰富，含蛋白质23％～27％、粗脂肪50％～60％、糖类10％，还含有磷、铁、钾、钙等无机盐类及多种维生素，是滋补佳品。杏仁是止咳平喘常用药物。苦杏仁主咳逆上气；甜杏仁又名巴杏仁，为滋养缓和性止咳药，主治咽干、干咳。此外，杏仁还有活血、解毒、杀虫等功效。',0),('jizaitai','鸡仔胎','fujian','在福建省漳州市芗城区、龙文区、龙海市及周边一带群众，每年秋凉以后，多有食用鸡仔胎，滋补身体的习惯。儿童食用鸡仔胎，更为普遍，新鲜鸡仔胎由于蛋白质含量较高，且有“人体胎盘”的某些成份，所以确能起来一定营养滋补作用。鸡仔胎既有蛋的滑韧，又有肉的细腻，还有软骨的酥脆，宜热食。深受食者的称道．每年秋凉后街头巷尾，在傍晚时都能听到“卖鸡仔胎……”的叫卖声。',0),('kangzimian','杠子面','guizhuo','杠子面面条以其独特的爽滑劲道让人赞不绝口，它之所以爽滑除了有少份量的淀粉和在面里以外。还有最重要的一道工序，就是擀面了，说是擀面其实是用一根胳膊粗的杠子压，杠子的一头固定在墙里，人骑在另一头来压，这样压出来的面，薄如纸，韧如绸，杠子面也就是由此得名。单碗下锅，调料特殊，口味以酸辣为主，热吃凉拌，均皆适口。当地人把杠子面当作每天必不可少的早餐，他们喜欢吃杠子面就和兰州人离不开牛肉面一样。',0),('kaofu','烤麸','shanghai','烤麸(fū)，江南地区常见的汉族特色食品。用带皮的麦子磨成麦麸面粉，而后在水中搓揉筛洗而分离出来的面筋，经发酵蒸熟制成的，呈海绵状，蛋白质含量高，也含有钙、磷与铁质，坊间一般食品店均有售。',0),('kaoyangpai','烤羊排','qinghai','羊肉的营养成分非常丰富，其组成极接近于人体，并易被消化吸收利用。检测分析羊肉中氨基酸含量丰富、种类齐全，系人体所必需的完全蛋白质来源之一。羊肉中还含有多种矿物质元素和维生素，它的营养保健功能受到众多消费者的青睐。《本草纲目》曾将羊肉与人参相提并论，美其名曰为“小人参”。',0),('kouweishe','口味蛇','hunan','口味蛇是湖南省传统的汉族名菜，属于湘菜系。此菜选用高蛋白，低脂肪，肉质细嫩的本地蛇作原料，配制以鲜、香、辣为主要特征的口味。蛇肉的胆固醇含量很低，对防治血管硬化有一定的作用。蛇肉质地细腻、滋味鲜美，而且还富有很高的营养价值，是深受人们喜爱的美味佳肴。',0),('kouweixia','口味虾','hunan','麻辣小龙虾又叫长沙口味虾、香辣小龙虾等，是湖南省著名的汉族小吃，以小龙虾制成，口味辣鲜香，色泽红亮，质地滑嫩，滋味香辣。20世纪末开始传遍全国，成为人们夏夜街边啤酒摊的经典小吃',0),('laiyangli','莱阳梨','shandong','莱阳梨亦称茌梨，因产于莱阳市而得名，是山东省的著名特产之一。多为倒卵形，果实硕大，果皮为黄绿色，莱阳梨表面粗糙，有褐色锈斑，萼部凹入。果肉质地细腻，汁水丰富，口感清脆香甜，是梨中的上品。',0),('lanzhoulamian','兰州拉面','gansu','兰州拉面，又称兰州清汤牛肉面，是“中国十大面条”之一[1] ，是甘肃省兰州地区的回族清真风味小吃。它以“汤镜者清，肉烂者香，面细者精”的独特风味和“一清二白三红四绿五黄”，一清（汤清）、二白（萝卜白）、三红（辣椒油红）、四绿（香菜、蒜苗绿）、五黄（面条黄亮），赢得了国内乃至全世界顾客的好评。并被中国烹饪协会评为三大中式快餐之一，得到美誉“中华第一面”。',0),('laohuaishushaobing','老槐树烧饼','hebei','老槐树烧饼是河北邯郸汉族特色小吃。这烧饼看来与平常的相仿：圆形，表面撒满芝麻。吃口大不相同，因饼中和入花椒盐和较多数量的香油，所以吃起来入口咸香、色泽金黄、外脆里嫩。40年前，邯郸新华街丁字胡同的一棵四人合抱的百年老槐树，古朴苍劲。树旁有一家烧饼铺，经营者是一对年轻的夫妻，他们经营的烧饼，以精粉、小磨香油、花椒盐、去皮芝麻为原料，小炉烘烤，火候均匀。接近烤熟前。再用薄刀片绕饼盖拉一圈口，使之成熟后饼盖崩开，色泽焦黄，酥脆味美。因此，买卖兴旺，门庭若市。',0),('laomatihua','老妈蹄花','sichuan','老妈蹄花是四川省成都市的一道名吃，属于川菜系。它以猪蹄为主要原料配以芸豆等其他调味品，精心煲煮而成。其外观肌肤胜雪，形似飞花，滑嫩细致，柔嫩爽口，香而不腻，豆如棉纱，汤香四溢。经历百年风雨经久不衰；是成都风味名吃中的上品。',0),('laoshanpijiu','崂山啤酒','shandong','采用著名崂山泉水和澳大利亚进口大麦酿制的崂山啤酒，被评为山东省名牌产品，崂山牌商标荣获山东省著名商标称号，崂山啤酒是全国轻工总会报国务院审批的啤酒行业保护民族工业十大品牌之一，多次荣获国内外金奖，青岛崂山啤酒厂所属的崂九乐矿泉厂生产的崂九乐矿泉水，经地矿部和省物探院检测，完全达到国际矿泉水质量标准，是青岛市蕴水量最大的矿泉水井群，被认定为一级矿泉水生产企业',0),('lengguochuanchuan','冷锅串串，冒菜','sichuan','冷锅串串源自四川成都或乐山的汉族小吃，属于川菜系。是火锅或者说是冷锅鱼的一种演变，但比之略有不同。它是由各种蔬菜、肉食切成不规则的形状，再用做好的竹签把这些菜品穿成一串一串，最后把它放入特制配方的锅里加工煮熟即可食用。',0),('lengmian','冷面','jiangsu','韩民族的冷面温面至少有一二百年的历史《东国岁时记》十一月条载“用荞麦面沈清和猪肉名日冷面”，就是把荞麦面条放入萝卜或白菜泡菜里，在放上猪肉片吃叫冷面，并有两种起因，一是以为白菜泡菜和萝卜泡菜都是凉的；二是为了同当时的骨董面加以区分。冷面属于机压面条，有冷面和温面两种。面条的做法一样，只是汤的凉热有别。汤是凉的，称做冷面；汤是热的，称为温面。冷面有面粉冷面、荞麦面冷面、苞米面面条、土豆浆冷面、土豆粉冷面等。在各类冷面中比较讲究的是荞麦面冷面。冷面汤以清炖的牛肉为上品煮肉时撇出浮油。冷面的佐料是把酱油、醋、香油、芝麻、胡椒粉、辣椒面、白糖、蒜沫等调味品混拌成糊状，适当的放入碗里。除此而外，还要放上鸡肉丸子、酱牛肉片、鸡蛋丝、苹果片等。在延边地区把这些佐料形象的成为冷面帽。冷面的风味因地而异。居住在延边和牡丹江地区的朝鲜族，喜欢吃冷面汤稍带甜味的冷面，其他地区的朝鲜族则喜欢吃不带甜味的冷面。',0),('liangjuanfen','凉卷粉','guizhou','凉卷粉制作过程传统、久远。凉卷粉首先精心筛选上好大米，加上巧家龙潭水磨成适宜的米浆、然后舀在盘片里擀成薄薄的一层，掌握火候蒸透，制凉，然后提取薄如面纱的凉卷粉成品。凉卷粉制作好后，还有一道最重要的工序，便是配制佐料：稠而不腻的芝麻油、花生油、核桃油，刺激的巧家花椒油、小米辣油、姜茉、葱花，蒜泥，再加上酱油、醋、盐、味精、泡菜、香菜，色、香、味俱全的凉卷烟便馋得你直咽口水。',0),('longxia','龙虾','jiangsu','龙虾（学名：Palinuridae）是节肢动物门甲壳纲十足目龙虾科4个属19种龙虾的通称。又名大虾、龙头虾、虾魁、海虾等。它头胸部较粗大，外壳坚硬，色彩斑斓，腹部短小，体长一般在20厘米～40厘米之间，重0.5公斤上下，无螯，是虾类中最大的一类。最重的能达到5公斤以上，人称龙虾虎。体呈粗圆筒状，背腹稍平扁，头胸甲发达，坚厚多棘，前缘中央有一对强大的眼上棘，具封闭的鳃室。主要分布于热带海域，是名贵海产品。中国已发现8种，以淡水龙虾[1]?产量较大。',0),('luobopi','萝卜皮','shandong','萝卜皮富含萝卜硫素，为十字花科蔬菜里最有益健康的化合物之一，可促进人体免疫机制，激发肝脏解毒酵素的活性，可保护皮肤免受紫外线伤害。',0),('luosifen','螺蛳粉','guangxi','辣椒是在明末从美洲传入中国的，起初只是作为观赏作物和药物，进入中国菜谱的时间并不太长。辣椒强势进入中国后，掀起了一场不大不小的饮食革命，柳州人将之融入螺蛳粉并加以发挥，才有了螺蛳粉。很多吃过螺蛳粉质疑螺蛳粉里为什么一颗螺蛳也没有，据说螺蛳粉的螺汤由螺肉、猪骨、药材、天然香料等民间秘方熬制而成，熬过汤后的螺肉就会丢弃，因其精华都浓缩入汤里了',0),('lurong','鹿茸','jilin','\"鹿茸是名贵药材。鹿茸中含有磷脂、糖脂、胶脂、激素、脂肪酸、氨基酸、蛋白质及钙、磷、镁、钠等成分，其中氨基酸成分占总成分的一半以上。',NULL),('lushanyunwucha','庐山云雾茶','jiangxi','庐山云雾茶是汉族传统名茶，是中国名茶系列之一，属于绿茶中的一种。最早是一种野生茶，后东林寺名僧慧远将野生茶改造为家生茶。始于汉朝，宋代列为“贡茶”。因产自中国江西省九江市的庐山而得名。茶芽肥绿润多毫，条索紧凑秀丽，香气鲜爽持久，滋味醇厚甘甜，汤色清澈明亮，叶底嫩绿匀齐。通常用“六绝”来形容庐山云雾茶，即“条索粗壮、青翠多毫、汤色明亮、叶嫩匀齐、香凛持久，醇厚味甘”。云雾茶风味独特，由于受庐山凉爽多雾的气候及日光直射时间短等条件影响，形成其叶厚，毫多，醇甘耐泡。',0),('lvrouhuoshao','驴肉火烧','hebei','驴肉火烧是一种华北地区极为流行的汉族小吃，发源于河北省古城保定市，广泛流传于冀中平原，后发展为南北两派。卤好的驴肉伴着老汤汁加入酥脆的火烧里面，作为河北省餐饮文化中心的保定，是中国第九大菜系——冀菜系的发源地，而处于这一河北餐饮中心的驴肉火烧经过勤劳的河北人民多少代人不断地发展和推广，终于使驴肉火烧闻名大江南北。在华北地区的大街小巷随处可见驴肉火烧的店铺，完全融入了当地居民的生活之中。河北河间也有类似名称食物，不过做法和味道却大不相同。据《史书记载》驴肉火烧源于明建文二年(公元1400年)河北保定，现在遍布燕赵大地。',0),('madieerbinggun','马迭尔冰棍','heilongjiang','吃过马迭尔冰棍的人都会说，鹅绒黄色的冰棍方方正正，外包装简单，吃到嘴里，入口即化，甜而不腻，奶味浓郁，特别好吃。“好吃”是马迭尔冰棍百余年来始终如一的品质，这种品质经历了无数消费者的检验，被消费者认可并口口相传。对卷烟零售商户来说，要想获得消费者的信赖，一是不卖假烟，坚持从烟草公司进货，倘使一个顾客买到了假烟，他必将告诉自己的亲朋好友不再光顾这家店，经营就此埋下隐患。二是要让自己的服务也变成消费者口口相传的“品质”，自始至终恒久不变，直至像马迭尔冰棍那样有口皆碑。',0),('maoniu','牦牛','xizang','牦牛是生长在地球之巅的高寒、无任何污染环境、独特的半野生半原始珍稀动物，与北极熊、南极企鹅共称为“世界三大高寒动物”。牦牛终身无劳役，逐水草而居的半野生放牧方式、原始自然的生长过程，一生中摄入大量的虫草、贝母等名贵中草药，使牦牛肉质细嫩，味道鲜美。',0),('menmian','焖面','innermongolia','焖面(Braised String Bean with Noodle)是中国中部和北部地区的汉族传统面食小吃，流行于山西，陕西，河南，河北，北京、天津、内蒙古，辽宁，安徽，湖北等长江以北大部分地区，又称为蒸面、卤面、炉面、垆面 、烀面、糊面。主料是面粉，配料主要是豆角和猪肉。其他随自己喜好而加。可以加入白菜，蘑菇，香菇，土豆丁，也很好吃，有养心益肾、健脾厚肠、除热止渴的功效。所用的面，可以是生面，也可以是熟面。熟面所蒸的时间比生面要少很多。焖算是此面的加工方法，对于很多地方称为：lumian。著名山药蛋派作家赵树理就特别爱吃这种面，还因此做了一些考证。他认为lumian应为“垆面”。“垆”当然不是普通浇卤面的那个“卤”字，而”是当年卓文君与司马相如相恋“当垆卖酒”的那个“垆”字。',8),('nanfengmiju','南丰蜜桔','jiangxi','南丰蜜桔（别称贡桔、蜜桔、南丰桔）是我国柑桔中的优良品种，同时也是江西省的名贵特产。历史上就以果色金黄、皮薄肉嫩、食不存渣、风味浓甜、芳香扑鼻而闻名中外。据《禹贡》记载，早在两千多年以前，南丰蜜桔已被列为贡品。唐宋八大家之一的曾巩，曾写诗赞美家乡的柑桔：“鲜明百数见秋实，错缀众叶倾霜柯。翠羽流苏出天仗，黄金戏球相荡摩。入苞岂数桔柚贱，宅鼎始足盐梅和。江湖苦遭俗眼慢，禁御尚觉凡木多。谁能出口献天子，一致大树凌沧波。”当时蜜桔已能献给天子，故南丰蜜桔又有“贡桔”的美誉，曾被斯大林同志誉为“桔中之王”。',0),('nang','馕','xinjiang','以小麦面粉为主要原料，是中国主要的日常主食之一。根据风味、口感不同可分为以下几种。（1）北方硬面馒头是中国北方的一些地区，如山东、山西、河北等地百姓喜爱的日常主食。依形状不同又有刀切形馒头、机制圆馒头、手揉长形杠子馒头、挺立饱满的高桩馒头等。（2）软性北方馒头在中国中原地带，如河南、陕西、安徽、江苏等地百姓以此类馒头为日常主食。其形状有手工制作的圆馒头、方馒头和机制圆馒头等。（3）南方软面馒头是中国南方人习惯的馒头类型。多数南方人以大米为日常主食，而以馒头和面条为辅助主食，南方软面馒头颜色较北方馒头白，而且大多带有添加的风味，如甜味、奶味、肉味等。有手揉圆馒头、刀切方馒头、体积非常小的麻将形馒头等品种。',0),('nanxiangxiaolongbao','南翔小笼包','shanghai','汉族小吃，南翔小笼是上海市嘉定区南翔镇的传统名产，原名南翔大肉馒头，后曾称南翔大馒头，以皮薄、肉嫩、汁多、味鲜、形美著称。起始于清代同治，至今已有100多年历史。由日华轩点心店主黄明贤创始，后日华轩的小笼师傅分别受雇于古猗园或自行开设松鹤轩经营，全镇酒菜馆争相仿制，旅沪的南翔人也邀请南翔师傅，分别在上海城隍庙和西藏路开设南翔小笼店，经常顾客盈门',0),('niulaba','牛腊巴','guangxi','牛腊巴颜色红光油亮，其味香辣，越嚼越香。胃口欠佳的人，闻之也会食欲大振。牛腊巴可作菜下酒送饭，也可作休闲零食。如作赠品，可用瓶罐装好，以石灰浆纸密封，可保存数月不变质。过去常有到寺村经商及探亲旅游者订制，带往柳州、梧州、广州、香港等地，赠送亲朋好友',0),('niurouguotie','牛肉锅贴','fujian','牛肉锅贴是一种煎烙的馅类食品，江苏南京著名的回族小吃，一般是饺子形状。牛肉锅贴是金陵八绝之一，是以牛肉为馅料，用面皮包成饺子后，放入油锅中煎至金黄色后装盘即可食用。这种甜中带咸的小吃上部柔嫩，底部酥脆，牛肉馅味鲜美，滋味别具。',0),('niuroumian','牛肉面','taiwan','牛肉面，分为台北牛肉面，内江牛肉面，兰州牛肉面，襄阳牛肉面，美国加州牛肉面。牛肉拉面是兰州的传统名食，它具有“一清、二白、三绿、四红、五黄”的特征，且色香味美，誉满全国。然而，在全国各地都会有“兰州正宗牛肉拉面”的招牌，但其实都并不正宗，都还填加了些其他蔬菜（如菠菜）。因此，国内大部分地区消费者很难吃到真正的“兰州牛肉面”。而兰州牛肉面只有在兰州才能达到原滋原味',0),('niuyangrou','牛羊肉','hebei','肥牛系列、眼肉系列、上脑系列、外脊系列、辣椒肉、小黄瓜条、牛舌、肩胛肉、带骨腹肉系列、牛腱子、三扒一霖、三角肉、牛腩、金钱展、美肥、肋条肉、牛鞭、牛骨髓、萨拉伯尔等',0),('nuomifan','糯米饭','guizhou','糯米饭是汉族主食之一，在南方汉族人民生活中占有重要地位，为男女老幼喜爱之食品，各种节日的主食，多为糯米做成的各种食品。有甑蒸加红枣的糯米饭，染成五颜六色的花糯米饭，元宵节的汤团、八宝饭、糍粑、年糕，端午节枕头形和三角的粽子，清明的青团，清明粑。贵州省流行各种口味糯米饭，各种糯米饭的甜咸酸辣做法层出不穷。',0),('nuomihongzao','糯米红枣','shanghai','小红枣水冲洗一下，放小锅里加水2杯置炉上开大火煮滚，调小火焖煮20分钟，捞出枣冷凉，煮枣的汁留用。糯米粉加糖2大匙拌匀后加水揉成软面 团。枣子用刀割开一边，然后取糯米面团搓成小细条，分小段塞入枣子的缝中。将心太软坯放回小锅里，加糖2大匙再煮滚，小火再焖煮10分钟即可。给女士的一道菜~红枣富含多种营养成分，其中维生素C的含量在果品中名列前茅，有“维生素之王”的美称~而且红枣补虚益气、养血安神的功效更是被人们所熟知，对女性、老年人都很好~看似复杂，其实在家做这道菜也就是十来分钟的功夫，当菜当零食都不错~',0),('oajian','蚵仔煎','taiwan','蚵仔煎并非台湾特有小吃，在闽南语系地区（闽南、潮汕）自古有之，是一道常见的家常菜，蚵仔煎据传是一种在贫穷社会之下所发明的一种创意料理，是先民困苦，在无法饱食下所发明的替代粮食，是一种贫苦生活的象征。闽南，台湾，潮汕三地基本同根同源，在台湾它最早的名字叫“煎食追”，是台南安平地区一带的老一辈的人都知道的传统点心，是以加水后的番薯粉浆包裹蚵仔、鸡蛋、葱、香菜等食材所煎成的饼状物。',0),('paigumianpian','排骨面片','qinghai','排骨[1]?，指猪、牛、羊等动物剔肉后剩下的肋骨和脊椎骨，上面还附有少量肉类，可以食用，如：红烧排骨，是一道中国家常菜。',0),('qingkejiu','青稞酒','xizang','\"酿造青稞酒无需复杂的程序。在藏区，几乎家家户户都能制。酿造前，首先要选出颗粒饱满、富有光泽的上等青稞，淘洗干净，用水浸泡一夜，再将其放在大平底锅中加水烧煮两小时,然后将煮熟的青稞捞出，晾去水气后，把发酵曲饼研成粉末均匀地撒上去并搅动，最后装进坛子，密封贮存。如果气温高，一两天即可取出饮用。互助青稞酒以青藏高原特有的粮食作物—青稞为原料，在继承古老传统生产工艺的基础上，引进现代技术装备，用无污染的天然优质矿泉水科学配料、精心酿造、久储自然老熟而成。产品具有清香醇厚、绵甜爽净，饮后头不痛、口不渴的独特风格，在强手如林的酒类行业中独树一帜，在西部民族地区享有盛誉。由于其“地理环境独特、酿酒原料独特、大曲配料独特、制酒工艺独特、产品风格独特”，青稞酒魂承传400年，至今兴盛不衰被全国酿酒专家誉为“高原明珠、酒林奇葩”。党和国家领导人江泽民、李鹏、胡锦涛、邹家华等来青海视察工作时，都曾品评过该公司的酒类产品。\"',0),('quanzhourunbing','泉州润饼','fujian','泉州润饼是中国闽南地区，潮汕地区，及台湾地区的一种汉族风味小吃，主要原料有春笋丝、胡萝卜丝、高丽菜（卷心菜、包菜）丝、韭黄、绿豆芽、香菇、酥海苔、猪肉腿、虾仁、蛋皮丝等，食用时，用薄如蝉翼的熟面皮把各种菜肴制成的馅料包卷成枕头状，然后根据个人嗜好蘸各种酱料。',0),('redaishuiguo','热带水果','hainan','海南以及云南南部热带、亚热带水果种类繁多，品质优良。有些热带水果为海南独有，有些亚热带水果也比国内其它地区上市早一至两月，而西瓜则是四季常甜。海南岛栽培和野生的果树有29个科、53个属、400余个品种，为世界上其它果区所罕见。其中属本岛原产的果树品种有龙眼、荔枝、芭蕉、桃金娘、锥栗、橄榄、杨梅、酸豆、油甘子。从南洋群岛和外地引进的品种有榴莲、人心果、腰果、油梨（鳄梨）、番石榴、甜蒲桃、菠萝蜜、芒果、山竹、柑桔、红毛丹等。云南酸角特有的热带水果。',0),('reganmian','热干面','hubei','热干面与北京的炸酱面、河南烩面、山西的刀削面、四川担担面同称为中国五大名面。热干面的面条纤细根根有筋力，色泽黄而油润，滋味鲜美。拌以香油、芝麻酱、富清鲜辣味粉、五香酱菜等配料，色香味俱全。武汉热干面可谓享誉全国乃至世界。',0),('renshen','人参','jilin','人参（Panax ginseng C. A. Mey）是多年生草本植物，喜阴凉，叶片无气孔和栅栏组织，无法保留水分，温度高于32度叶片会灼伤，郁闭度0.7-0.8。通常3年开花，5-6年结果，花期5-6月，果期6-9月。生长于北纬33度—48度之间的海拔，数百米的以红松为主的针阔混交林或落叶阔叶林下，产于中国东北、朝鲜、韩国、日本、俄罗斯东部。人参的别称是 黄参、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。',0),('shaomai','烧麦','innermongolia','稍美，是一种在内蒙古西部各城市流传很久、至今不衰的传统风味食品，稍麦是一种面制包馅的笼蒸点心。其外形束折如花，皮薄馅嫩。和中国南方地区的传统小吃“烧卖”外形类似，但是所用馅料不同，内蒙古地区的稍美只用牛羊肉和大葱，南方烧卖馅料种类繁多，不是一种食品。后来又写作“烧麦”、“烧卖”、“稍美”“稍梅”、“烧梅”、“稍卖”等。\r',6),('shaoya','烧鸭','xianggang','很久以前在岭南地区就流传着这样一句话：广州吃烧鹅，南宁吃烧鸭。南宁人自古喜欢吃鸭，这和南宁的气候有极大关系。南宁天气炎热，居住于此的南宁先民认为鸭肉清热祛火，而鹅肉性毒，吃了会使患处愈加发炎肿胀，多食上火生疮。据说，南宁最早出现烧鸭是在清初康熙年间。南宁烧鸭的原料多选用南宁本地的芝麻鸭，皮香肉嫩，骨头带香。由于地域不同，形成了选料、制作流程、吃法等风格的迥异，南宁烧鸭与北京烤鸭代表了中国烤鸭的南北两派别',0),('shibajiemahua','十八街麻花','tianjin','桂发祥十八街麻花是一道色香味俱全的汉族名点。天津市的百年老字号麻花店，与天津狗不理包子、耳朵眼炸糕并称的“天津三绝”，位列其首。桂发祥十八街麻花在全国首届名小吃认定会上被认定为“中华名小吃”，1996年被中国国内贸易部命名为“中华老字号”，曾荣获国家部优金鼎奖、亚太地区博览会金奖，并被认定为中国驰名商标、天津市名牌产品及天津市著名商标。',0),('shouzhuarou','手抓肉','xinjiang','手抓肉是草原牧民最常用和最喜欢的餐食，也是他们招待客人必不可少的食品。常年似乎已形成这样一种概念，即到草原观光旅游不吃一顿手抓肉就算没完全领略到草原食俗风味和情趣，虚此一行。牧民不用手抓肉招待客人，就不能完全表达自己的心意。因此，用手抓羊肉款待远方客人，在牧区已成为一种定规。',0),('shuabatou','刷把头','guizhou','刷把头是一道色香味俱全的汉族小吃。做工十分精细，全是手工劳作；配料选料也很讲究。以面粉、 竹笋、瘦肉、鸡蛋、为主要材料。面皮擀成荷叶边状，包以猪由末、冬菇、兰片、金钧、葱花、调料等制成的馅心，用手捏成刷把头形，不封口，蒸熟。又名石榴卷。边口白色，外形美观，面皮香软，馅料鲜美。',0),('shuangliututou','双流兔头','sichuan','兔头是四川成都汉族名小吃之一，鲜香味美，口感极佳。成都人消暑下啤酒的必点食品，夏天满街的“冷啖杯”食肆没有一家不卖兔头的。冬天则有热腾腾现从锅里捞出来的“啤酒兔头”。最著名的兔头发源于成都市旁边的双流，即成都国际机场所在的地方。那里的“双流老妈兔头”已成一绝。此外“乔一乔”和东风大桥兔头也都名声在外。',0),('shuijingxiajiao','水晶虾饺','xianggang','虾饺最早出现在广州郊外靠近河涌集市的茶居。那些地方盛产鱼虾，茶居师傅再配上猪肉、竹笋，制成肉馅。当时虾饺的外皮选用粘(大)米粉，皮质较厚，但由于鲜虾味美，很快流传开来。城内的茶居将虾饺引进，经过改良，成为广州的名点，历久不衰。 　虾饺在制作上较为讲究，将澄面、生粉制成虾饺皮；鲜虾洗净去壳吸干水分压烂搅拌成肉胶，肥肉切成细粒，用开水烫至刚熟，再用清水浸过，使肥肉既爽而又不致出油；加入鸡蛋白、细笋丝、味粉、麻油、胡椒粉等配料，经冷冻后制成虾饺蒸熟。虾饺片薄而半透明，皮内鲜饺馅料隐约可见，形似一梳香蕉。由于外形美观，味道鲜美爽滑，美味可口，深受海内外食客赞誉。近十年推出的鸡粒虾饺、蟹黄虾饺等新品种更受食客的青睐。',0),('shunqingmifen','顺庆米粉','sichuan','南充名小吃。很多品种，其中最为著名的为顺庆羊肉粉。 早在清代，顺庆羊肉粉就闻名遐迩，最为有名的当属朱老拱粉店。顺庆羊肉粉是由米粉（以大米制成的熟米粉）和羊肉汤、馅，配上考究的佐料而成，具有三鲜特色（粉鲜、馅鲜、汤鲜），米粉质细、绵软、馅味清得无腥膻，汤色乳白而滚烫。数九寒冬在最冷的早上，食一碗羊肉粉可发热冒汗，大有驱寒祛湿之功，故有人喜用食羊肉粉发汗治疗感冒。甚至大多数南充人已将早上吃一碗热乎乎的米粉养成自己的一种习惯，故大多数粉馆都是早上、上午营业。',0),('songrongji','松茸鸡','xizang','松茸以云南野生松茸为佳，高品质松茸其颜色微白，质地硬实，香气更浓郁，口感好，营养成分高。 国内知名安全食品商城食养家可提供高品质云南的野生松茸，网上直购，快速宅送，品质价格均得好评。 此汤不仅味道鲜美可口，与温补的鸡肉同冶一炉，补益价值更为明显，益精强肾、补益肠胃，且味道鲜美、易于消化，是不可多得的冬天温补汤',0),('suyoucha','酥油茶','xizang','藏族嗜好酥油茶，有一则民间爱情故事，叙说了酥油茶的来历。传说，藏区有两个部落，曾因发生械斗，结下冤仇。辖部落土司的女儿美梅措、在劳动中与怒部落土司的儿子文顿巴相爱，但由于两个部落历史上结下的冤仇，辖部落的土司派人杀害了文顿巴，当为文顿巴举行火葬仪式时，美梅措跳进火海殉情。双方死后，美梅措到内地变成茶树上的茶叶，文顿巴到羌塘变成盐湖里的盐，每当藏族人打酥油茶时，茶和盐再次相遇，这则由茶俗引发出的故事，具有极强的艺术感染力。',0),('tangyoubaba','糖油粑粑','hunan','糖油粑粑是湖南长沙市的汉族传统名吃，糖油粑粑造价便宜，主要原料是糯米粉和糖，但其制造工艺精细讲究，有特殊的制造过程。它虽不能登大雅之堂，更不能与山珍海味、鱼翅熊掌相媲美，但正是因其廉价的身份，它能出入平常百姓家，受到民众的厚爱，成为民间长吃不厌的小吃。在长沙，不管人的俊美丑恶、身份地位，也不管男女老少，凡是热爱生活、懂得享受吃的乐趣之人，都有吃糖油粑粑的美妙感受，都对那三毛钱一个的糖油粑粑有特殊感情。早上三个糖油粑粑下肚，可饱一天精神，充沛体力，下午三个糖油粑粑打牙祭，提神饱肚，精神旺盛，糖油粑粑的滋味和作用在长沙人眼里都是奇妙无穷的。',0),('tianshuiguagua','天水呱呱','gansu','天水呱呱是一种甘肃天水的汉族传统风味小吃，被誉为“秦州第一美食”。是用当地特产的一种被称作荞麦的淀粉制作的。以香、辣、绵、软着称。卖呱呱的小摊小店著名的有秦城区的“常记呱呱”、“赵记呱呱”、“东团庄呱呱”。相传西汉末年，隗嚣割据天水时，其母朔宁王太后对呱呱特别嗜好，每隔三天必要一食。于是遂为皇宫御食。后来隗嚣兵败，亡命西蜀，御厨逃离皇宫，隐居天水，在城中租一铺面，经营呱呱。还有一种说法是明代有一刘姓父女，在原荞凉粉的基础上创造了呱呱。',0),('wanzhoukaoyu','万州烤鱼','chongqing','万州烤鱼是属于重庆汉族传统名菜，属于渝菜系。万州烤鱼把鱼剖洗净后平放在铁夹中，放在炉上用木炭烧烤，盛到专用铁盘中，浇上用牛油、红油、白糖、花椒、辣椒等调味品炒出底料，放上西芹、豆芽等爽口菜。口味咸辣。万州烤鱼采用“先烤后炖”的独特做法，融合了烤、炖两种烹饪工艺的精华。据说川式烤鱼的由来是从非洲传来的，一名捕到鱼的非洲土著，烤了很久鱼还未熟，便把那条鱼加入汤汁调味料边吃烤，发现比以往任何时候都鲜美，从此就有了这道美味，烤鱼相传已有千余年历史。',0),('weizhoudaohaixian','涠洲岛海鲜','guangxi','“海鲜”，古称“海错”，意谓海中产物，错杂非一。追溯如东海鲜风味菜品的源头，虽无确切的文字依据，但根据考古学家的考证，至少在距今4000－6000年前的新石器时代，人类已懂得采拾贝类以供食用，而且已有熟食加工了。翻开烹饪古籍资料，发现有关海鲜的记载主要有三个方面，一是饮食养生，二是烹饪技巧，三是海鲜菜品。尤以海鲜菜品的记载最为丰富。据史料查实，传统海鲜饮食烹制、调味方法、用料组合以及对火候的把握，都已自成一体。',0),('wenchangji','文昌鸡','hainan','文昌鸡摆盘美观，色泽淡黄光亮，皮脆肉嫩味鲜，醮佐料而吃，入口喷香，爽滑异常。 据传，文昌鸡最早出自该县潭牛镇牛镇天赐村，此村盛长榕树，树籽富含营养， 家鸡啄食，体质极佳。文昌鸡的特点是个体不大，重约1.5千克左右，毛色鲜 艳，翅短脚矮，身圆股平，皮薄滑爽，肉质肥美。海南人吃文昌鸡，传统的吃法 是白斩（也叫“白切”），最能体现文昌鸡鲜美嫩滑的原质原味。同时配以鸡油鸡汤精煮的米饭，俗称“鸡饭”。海南人称“吃鸡饭”即包含白斩鸡在内。白斩文昌鸡在海南不论筵席、便餐或家庭菜皆派用场。在香港、东南亚一带出备受推崇，名气颇盛。',0),('wujiangzhacai','乌江榨菜','chongqing','乌江牌榨菜乌江榨菜，是重庆市涪陵榨菜集团旗下众多榨菜品牌之一。是涪陵榨菜的一种。榨菜位居世界三大名腌菜（即涪陵榨菜、法国酸黄瓜、德国甜酸甘蓝）之首，历来被列为素菜佳品。其工艺独特，配料考究，鲜香脆嫩，回味悠长。',0),('wuweiliangpi','武威凉皮','gansu','武威凉皮，即酿皮子，是西北独特的风味小吃之一，这种小吃味美爽口。经济实惠，既有菜又有饭。同时，又是“快餐”，只要到酿皮子的摊上去，一、二分种即可到口，所以受到群众的喜爱。食用时，要将涮好的一张张酿皮子切成细条，上面再放上几块蒸熟的，切成薄片的面精，浇上辣椒油、醋、蒜末、酱油、芥末等佐料，其色悦目，香味诱人，在炎热的夏季，若能吃一盘酿皮子，顿时倍感凉爽提神，食欲大增。酿皮子一年四季都有出售，其特点是色泽橙黄而透明，吃起来柔软又有韧劲，风味特佳．（在甘肃、青海等地的小吃中的酿皮读rang pi）',0),('xianhuabing','鲜花饼','yunnan','鲜花饼是以云南特有的食用玫瑰花入料的酥饼，是具有云南特色的云南经典点心代表。鲜花饼在云南当地烘焙品牌大都均有销售。鲜花饼也是中国四大月饼流派滇式月饼的经典代表之一。鲜花饼的制作缘起300多年前的清代。由上等玫瑰花制得的鲜花饼，因其特色风味历为宫廷御点，深得乾隆皇帝喜爱。近代滇式鲜花饼就是1945年昆明冠生园生产的鲜花饼为起源，当年在昆明的西坝昆明冠生园还专门开辟一块地种植使用鲜花用来加工鲜花饼和玫瑰糖。',0),('xianyubingzi','咸鱼饼子','liaoning','咸鱼饼子是北方沿海的汉族传统名小吃 ，属于东北菜。新鲜的海鱼用盐腌过，在阳光下晒干，然后放在铁锅里，搁少许油，煎得外焦里嫩，和玉米面饼子一起吃味道独特。',0),('xiaomijiu','小米酒','taiwan','酿制小米酒是台湾原住民传统文化之一。举凡在生活、祭祀、礼俗都占有非常重要的角色。',0),('xiaoshigyangtang','小市羊汤','liaoning','羊肉汤中华传统经典名吃，在全国各地均有各具特色的地方名吃。主要将羊骨头一起投入大锅里熬汤，再将切成砣的新鲜羊肉与清洗干净的羊杂一起投入汤锅中煮。煮熟后捞起来沥干，然后切成薄片放入滚开水里一氽，再倒入汤碗中，冲入滚烫雪白香甜的羊汤水，撒上碧绿的葱花，一碗热气腾腾，香气四溢的羊肉汤就做成了。配上一个由辣椒油、花椒面、盐、味精等调和就成羊肉汤。羊肉汤含在嘴里，香味便融入了你整个身体',0),('xiaoyangshengjian','小杨生煎','shanghai','作为上海一家特色生煎店，已发展有数家连锁店。小杨生煎个大汤多，肉馅是用剁碎的猪肉加其他调料制成。2006年“小杨生煎”获得“上海名点、名小吃”称号，其后又被评为“信用资质AAA”企业。2009年11月11日，一个声称“小杨生煎有毒”的帖子出现在网上，并迅速被转载，一时成为沪上的热门话题。事发一周后，“小杨生煎馆”委托律师发布辟谣声明，并表示保留追究相关侵权单位和个人法律责任的权利',0),('xiekehuang','蟹壳黄','shanghai','蟹壳黄是江苏常州汉族风味小吃，俗称小麻糕，常与大麻糕相配作礼品用。其馅心有荠菜、葱油、白糖、明油豆沙等4种。其特点：形似蟹壳，色呈金黄，油多不腻，香脆酥松，糖馅甜醇，咸馅味鲜',0),('xinjiangbanmian','新疆拌面','xinjiang','拉条子就是新疆拌面的俗称。制作时不用擀、压的方法而直接用手拉制成，加入了各种蔬菜和牛羊肉，是新疆各族群众都喜欢的一种大众面食，特别是维吾尔族和回族等民族的拉条子别有一番风味。驰名中外，深受各国人民喜爱。',0),('yangrouchuan','羊肉串','xinjiang','羊肉串是近几年来流行很广的大众饮食，基本上没有淡旺季之分，如果在天气炎热的南方，冬天的生意要更好一些。烧烤可以说是从新疆的烤羊肉串普及开来的，通过不断发展，烧烤的风格结合地域特色有了创新和变化，品种呈多样性，除了羊、牛、鸡、鱼等许多肉类之外，许多蔬菜水果也可以拿来烤。烤羊肉串的吃法只撒辣椒和孜然两种作料，但演变后的烧烤一般都会在此基础上根据当地消费者口味调配佐料。',0),('yangzhouchaofan','扬州炒饭','jiangsu','扬州炒饭又名扬州蛋炒饭，是江苏扬州经典的汉族小吃。原流传于当地民间，相传源自隋朝越国公杨素爱吃的碎金饭，即蛋炒饭。隋炀帝巡视江都（今扬州）时，随之也将蛋炒饭传入扬州，后经历代厨坛高手逐步创新，柔合进淮扬菜肴的“选料严谨，制作精细，加工讲究，注重配色，原汁原味”的特色，终于发展成为淮扬风味有名的主食之一。欧美、日本、香港等地的扬州风味菜馆，也纷纷挂牌售此美食，颇受欢迎',0),('yanshuiya','盐水鸭','jiangsu','不是普通饭馆所做的“卤牲口”，也不是保定府出名的“卤煮鸡”，是家庭中自饱或款客的妙品。盐水鸡的做法很简单，最要紧的是不用笋鸡，也不用多年老鸡，要用当年的大鸡（试其老嫩的方法是按其胸骨，应手折断的最嫩，应手弯软的也在当年，如为隔年老鸡，就非普通人指力所能屈动的了）活鸡现宰，煺净鸡毛，洗净内膛，一劈两半放进锅内（最好用南京砂锅或大同府砂钴）。放水须浸过鸡肉，多放一点食盐，加入料酒微火慢煨，靠到汤剩下一锅底时放进花椒，等最后出锅时，汤已没有多少。冷吃可以渗酒，热吃可以下饭，较市头出卖的高出百倍，缘故是原汤完全浸入鸡肉，和既煮鸡又要汤的不同，但千万不可使鸡肉过烂，否则也会失去美味。',0),('yantaipingguo','烟台苹果','shandong','烟台苹果是山东名优特产之一，产地以烟台辖区内的栖霞市、海阳市、招远市、蓬莱市、牟平区、莱阳市、莱州市等地区为主。烟台苹果素以风味香甜、酥脆多汁享誉海内外，历来为国内外市场所欢迎。',0),('youmian','莜面','innermongolia','由莜麦加工而成的面粉。经过精细制作成为食品。莜面的营养成份是其它面粉营养成份的七倍以上，可与精面粉媲美。莜面中含有钙、磷、铁、核黄素等多种人体需要的营养元素和药物成份，可以治疗和预防糖尿病、冠心病、动脉硬化、高血压等多种疾病。同时莜面中含有一种特殊物质——亚油酸，它对于人体新陈代谢具有明显的功效。莜面（yóumiàn）是莜麦磨成的面粉，在山西内蒙古地区也是莜麦面食品的统称。12345',1),('youmianwowo','筱面窝窝','shanxi','莜面栲栳栳（栲栳kǎolǎo）是山西，以及河北高寒地区尤其是坝上地区著名的汉族面食小吃，属于西北主食。栲栳是指用柳条编成，形状像斗的容器。也叫“笆斗”。“栲栳栳”是用莜面精工细作的一种面食品，因其形状象“笆斗”，民间叫“栳栳”。是用竹篾或柳条编制成的一种上下粗细一致的圆框，形状象斗，是农家专门用来打水或装东西的一种用具，因“栲栳栳”形如“笆斗”故得名。在河北省张家口的张北县，赤城县，尚义县，沽源县，康保县，崇礼县，承德市的丰宁，围场。内蒙古呼和浩特市武川县，乌兰察布市凉城县、卓资县、丰镇市及察哈尔右翼中旗、锡林郭勒盟南部。山西大同市的左云县、天镇县、阳高县也比较被大家所欢迎。',0),('yudan','鱼蛋','xianggang','鱼丸因注重选料和制作工艺而名闻遐迩。多以鲜黄鱼、马鲛鱼、鳗鱼、小参鲨为主料。而深沪水丸选用鳗鱼、马加鱼、嘉腊鱼、敏鱼和五香肉等，剁碎捣烂，与地瓜粉一起搅合千捶而成，形状有圆形、块状、鱼形各种，坚韧雪白，质地柔软，并用肉骨清汤、油葱、瘦肉配煮，下锅膨胀力强，不易变质，入口鲜美清脆。剁碎鱼肉，加适量姜汁、食盐、味精，捣成鱼泥，调进薯粉，搅匀后挤成小圆球，入沸汤煮熟。其色如瓷，富有弹性，脆而不腻，为宴席常见菜品.有“没有鱼丸不成席”之说.尤其是回榕探亲的侨胞，都喜欢品尝家乡的鱼丸，一饱口福。福州习俗，办酒席，客人都要“夹酒包”。过去“酒包”中都有鱼丸，个头有小孩子拳头大，“夹”回家，要切成小块，大家吃。也有人爱吃无馅的小鱼丸，专门请人特制，那鱼丸的弹性非常强.鱼丸是闽南、福州、广州一带经常烹制的传统食品。因为它味道鲜美，多吃不腻，可作点心配料，又可作汤，所以是沿海地区的人们不可少的海味佳肴。福州临海，水产丰富，于是近十年来鱼丸渐渐成为福州鱼制品小吃的堂主，广受好评。',0),('yuntunmian','云吞面','xianggang','云吞面起源于广州，五十年代在香港蓬勃兴起，至今云吞面依然甚得人心。据说，此食品在唐宋时即已传入广东。据《群居解颐》一书记载：“岭南地暖……又其俗，入冬好食馄饨，往往稍喧，食须用扇”。至于广东何时用“云吞”二字取代馄饨之称，则无从考证',0),('zasuitang','杂碎汤','qinghai','青海人民把杂碎汤泡馍看成是最美好的早餐。它既能补身、耐饥，又能抗寒。杂碎是指煮熟的牛羊的头、心、肺、肠、胃、四蹄等，俗称“下水”。它又分两种，即“牛下水”或“牛肉杂碎”、“羊下水”或“羊肉杂碎”。杂碎汤就是杂碎煮成的汤，即下水下锅后，加调料、山楂等物，文火煮，肠肚烂后捞出，继续煮头蹄，去上层油 凝固（称“化油”），全部捞出备用。汤中加一些干葱丝、绿芫荽等调味品。杂碎汤香味浓、不腻、补身。',0),('zhangfeiniurou','张飞牛肉','sichuan','张飞牛肉产于四川省南充市阆中市，是具有浓厚的四川风味的特产。张飞牛肉表面为棕红色，切开后肉质纹丝紧密，不干、不燥、不软、不硬，食之咸淡适口，宴席配餐，伴酒佐餐均宜。张飞牛肉在清代乾隆年间就远近驰名，已有二百年历史。民国时期在成都“劝业会”上曾被评为“上等食品”，自此声誉更佳。亦曾在40年代获得成都工业协会优质产品银奖，名扬川内外。因其外观特征为“表面墨黑内心红亮”恰好和猛将张飞的形象相似，故称“张飞牛肉”。剖其横格，轻撕切面，如银丝松针相联，细细咀嚼，其味无穷。1998年获中商部优质产品奖，首届中国食品博览会铜奖。',0),('zhouheiya','周黑鸭','hubei','\"湖北周黑鸭食品有限公司是一家专业从事鸭类、鹅类、鸭副产品和素食产品等熟卤制品生产的品牌企业，其前身为“武汉世纪周黑鸭食品有限公司”。公司位于湖北省武汉市江岸区谌家矶大道72号，建筑面积8000平方米，现有职工近3000人，年加工生产鸭类产品5000吨以上。2008年5月经报请湖北省工商管理局批准，更名为“湖北周黑鸭食品有限公司”。主要经营“周黑鸭”系列产品，目前在武汉市区内拥有40家直营门店，基本遍布武汉三镇一类商圈，产品享誉全江城。',NULL),('zhuxueguanchang','猪血灌肠','shanxi','猪血灌肠是一道山西的汉族特色小吃。主料是猪血，配以豆芽等。它创制于清朝中叶，加工精细，风味独特，是誉满三晋之佳品在山西，一年四季街头巷尾均有摊点销售山西小吃猪血灌肠，它既可凉吃，亦可炒吃。',0);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-25  0:18:51
