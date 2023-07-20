-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 20, 2023 at 01:12 PM
-- Server version: 8.0.33
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_onphar`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `id_user`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(7, 5),
(8, 6),
(9, 7),
(10, 8),
(13, 9),
(12, 10);

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
CREATE TABLE IF NOT EXISTS `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_item` int NOT NULL,
  `id_cart` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart` (`id_cart`),
  KEY `fk_cart_item` (`id_item`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `id_item`, `id_cart`, `quantity`) VALUES
(1, 41, 1, 11),
(2, 48, 1, 5),
(3, 42, 2, 10),
(11, 46, 3, 5),
(15, 43, 1, 4),
(20, 49, 3, 6),
(21, 42, 3, 19),
(23, 42, 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer_delivery_address`
--

DROP TABLE IF EXISTS `customer_delivery_address`;
CREATE TABLE IF NOT EXISTS `customer_delivery_address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `home_address` text NOT NULL,
  `delivery_address` text NOT NULL,
  `delivery_secondaryAddress` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `id_category` int NOT NULL,
  `id_symptom` int NOT NULL,
  `remaining_stock` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `item_dateListed` date NOT NULL,
  `rating` float NOT NULL,
  `ActiveStatus` tinyint(1) NOT NULL,
  `quantity_sold` int NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `id_store` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_icategory` (`id_category`),
  KEY `fk_isymptom` (`id_symptom`),
  KEY `fk_istore` (`id_store`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `id_category`, `id_symptom`, `remaining_stock`, `description`, `item_dateListed`, `rating`, `ActiveStatus`, `quantity_sold`, `image`, `id_store`) VALUES
(41, 'Aspirin', 120, 1, 1, 50, 'Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation.', '2023-07-01', 0, 1, 0, '/assets/pills1.png', 1),
(42, 'Ibuprofen', 89, 1, 1, 150, 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce fever, and reduce inflammation.', '2023-07-02', 0, 1, 0, '/assets/pills3.png', 3),
(43, 'Paracetamol', 50, 1, 1, 100, 'Paracetamol is a commonly used medication to relieve mild to moderate pain and reduce fever.', '2023-07-03', 0, 1, 0, '/assets/pills2.png', 4),
(44, 'Loratadine', 170, 2, 2, 20, 'Loratadine is an antihistamine used to relieve allergy symptoms such as runny nose, sneezing, itchy or watery eyes, and itching in the nose or throat.', '2023-07-04', 0, 1, 0, '/assets/tablet1.png', 1),
(45, 'Omeprazole', 250, 3, 3, 75, 'Omeprazole is a proton pump inhibitor (PPI) used to reduce stomach acid production and treat conditions like heartburn, gastroesophageal reflux disease (GERD), and stomach ulcers.', '2023-07-05', 0, 1, 0, '/assets/tablet2.png', 1),
(46, 'Cetirizine', 150, 2, 2, 60, 'Cetirizine is an antihistamine used to relieve allergy symptoms such as sneezing, itching, watery eyes, or runny nose.', '2023-07-06', 0, 1, 0, '/assets/mask.png', 3),
(47, 'Simvastatin', 240, 4, 4, 90, 'Simvastatin is a statin medication used to lower cholesterol and triglyceride levels in the blood.', '2023-07-07', 0, 1, 0, '/assets/tablet1.png', 1),
(48, 'Metformin', 240, 4, 5, 180, 'Metformin is an oral medication used to lower blood sugar levels in individuals with type 2 diabetes.', '2023-07-08', 0, 1, 0, '/assets/pills2.png', 1),
(49, 'Amoxicillin', 180, 5, 6, 40, 'Amoxicillin is an antibiotic used to treat a wide range of bacterial infections, including respiratory infections, ear infections, and urinary tract infections.', '2023-07-09', 0, 1, 0, '/assets/tablet2.png', 1),
(50, 'Prednisone', 200, 1, 1, 30, 'Prednisone is a corticosteroid used to treat conditions such as allergic disorders, skin conditions, arthritis, lupus, and breathing disorders.', '2023-07-10', 0, 1, 0, '/assets/mask.png', 2),
(51, 'Atorvastatin', 80, 4, 4, 80, 'Atorvastatin is a statin medication used to lower high cholesterol levels and reduce the risk of heart disease.', '2023-07-11', 0, 1, 0, '/assets/pills3.png', 2),
(52, 'Diazepam', 100, 6, 7, 60, 'Diazepam is a medication used to treat anxiety, muscle spasms, seizures, and alcohol withdrawal symptoms.', '2023-07-12', 0, 1, 0, '/assets/pills1.png', 3),
(53, 'Sertraline', 160, 6, 8, 90, 'Sertraline is an antidepressant medication used to treat depression, panic attacks, obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD).', '2023-07-13', 0, 1, 0, '/assets/tablet1.png', 2),
(54, 'Metoprolol', 180, 7, 9, 130, 'Metoprolol is a beta-blocker used to treat high blood pressure, angina (chest pain), and heart failure.', '2023-07-14', 0, 1, 0, '/assets/tablet2.png', 2),
(55, 'Losartan', 290, 7, 9, 80, 'Losartan is an angiotensin II receptor blocker (ARB) used to treat high blood pressure and protect the kidneys from damage due to diabetes.', '2023-07-15', 0, 1, 0, '/assets/tablet1.png', 5),
(56, 'Levothyroxine', 49, 8, 10, 180, 'Levothyroxine is a medication used to replace or supplement thyroid hormone in individuals with an underactive thyroid gland (hypothyroidism).', '2023-07-16', 0, 1, 0, '/assets/mask.png', 4),
(57, 'Warfarin', 80, 8, 10, 40, 'Warfarin is an anticoagulant medication used to prevent blood clotting and reduce the risk of stroke, heart attack, and other blood clot-related conditions.', '2023-07-17', 0, 1, 0, '/assets/tablet1.png', 3),
(58, 'Albuterol', 60, 8, 10, 80, 'Albuterol is a bronchodilator used to relieve asthma symptoms, including wheezing, shortness of breath, coughing, and chest tightness.', '2023-07-18', 0, 1, 0, '/assets/pills1.png', 5),
(59, 'Fluoxetine', 130, 8, 10, 60, 'Fluoxetine is an antidepressant medication used to treat depression, obsessive-compulsive disorder (OCD), panic disorder, and bulimia nervosa.', '2023-07-19', 0, 1, 0, '/assets/tablet2.png', 5),
(60, 'Ciprofloxacin', 120, 8, 10, 100, 'Ciprofloxacin is an antibiotic used to treat various bacterial infections, including urinary tract infections, respiratory infections, skin infections, and gastrointestinal infections.', '2023-07-20', 0, 1, 0, '/assets/tablet1.png', 2),
(62, 'Aspirin', 120, 1, 1, 50, 'Aspirin is a nonsteroidal anti-inflammatory drug', '2023-07-11', 0, 1, 0, '/assets/pills1.png', 2);

-- --------------------------------------------------------

--
-- Table structure for table `item_category`
--

DROP TABLE IF EXISTS `item_category`;
CREATE TABLE IF NOT EXISTS `item_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `item_category`
--

INSERT INTO `item_category` (`id`, `category_name`, `category_description`) VALUES
(1, 'liquid', 'medicine in liquid form'),
(2, 'tablet', 'medicine that is solid'),
(3, 'capsules', 'medicine that is contained in a capsule'),
(4, 'drops', 'liquid medicine that uses a dropper'),
(5, 'inhalers', 'medicine that is used to be breathed in'),
(6, 'injections', 'medicine that is using syringe to push fluids into the body'),
(7, 'patches', 'placed on the skin to heal '),
(8, 'buccal', 'medicine given between the gums and the inner lining of the mouth cheek');

-- --------------------------------------------------------

--
-- Table structure for table `item_symptom`
--

DROP TABLE IF EXISTS `item_symptom`;
CREATE TABLE IF NOT EXISTS `item_symptom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `symptom_name` varchar(255) NOT NULL,
  `symptom_description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `item_symptom`
--

INSERT INTO `item_symptom` (`id`, `symptom_name`, `symptom_description`) VALUES
(1, 'flu', 'influenza'),
(2, 'diarrhea', 'uncontrollable urge to defecate'),
(3, 'skin infection', 'skin anomaly'),
(4, 'common cold', 'cold'),
(5, 'allergies', 'dangerous illness'),
(6, 'sinusitis', 'sinus'),
(7, 'abdominal pain', 'pain in the abdomen'),
(8, 'sore eyes', 'burning sensation in the eyes'),
(9, 'sore throat', 'burning sensation in the throat'),
(10, 'foodborne illness', 'eating contaminated food and other illness caused by food');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` tinyint NOT NULL AUTO_INCREMENT,
  `rolename` varchar(255) NOT NULL,
  `roledescription` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `rolename`, `roledescription`) VALUES
(1, 'customer', 'this user has the ability to add to cart and buy items'),
(2, 'pharmacy staff', 'this user has the ability to view and manage stocks, modify prices, check for availability, answer customer queries, do customer service and validate customer RX.'),
(3, 'courier', 'this user has the ability to view parcel information and delivery address of the package'),
(4, 'pharmacy manager', 'this user has the ability to view sales and manage shop resources, and also be able to do everything that a staff '),
(5, 'admin', 'this user has the ability to view and manage website activities and also view all users');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE IF NOT EXISTS `session` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `username`) VALUES
(1, 'Jokowan'),
(2, 'Jokowan'),
(3, 'Jokowan'),
(4, 'Marsch28'),
(5, 'Jokowan'),
(6, 'Jokowan'),
(7, 'Marsch28'),
(8, 'Jokowan'),
(9, 'markRover12'),
(10, 'Jokowan'),
(11, 'Jokowan'),
(12, 'Jokowan'),
(13, 'Jokowan'),
(14, 'Marsch28'),
(15, 'johndoe'),
(16, 'Jokowan'),
(17, 'Jokowan'),
(18, 'Jokowan'),
(19, 'Marsch28'),
(20, 'markRover12'),
(21, 'Jokowan'),
(22, 'Marsch28'),
(23, 'Jokowan'),
(24, 'Heartrey'),
(25, 'Jokowan'),
(26, 'Heartrey'),
(27, 'Marsch28'),
(28, 'Heartrey'),
(29, 'Felofe');

-- --------------------------------------------------------

--
-- Table structure for table `session_customer`
--

DROP TABLE IF EXISTS `session_customer`;
CREATE TABLE IF NOT EXISTS `session_customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `session_pharmacy_staff`
--

DROP TABLE IF EXISTS `session_pharmacy_staff`;
CREATE TABLE IF NOT EXISTS `session_pharmacy_staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
CREATE TABLE IF NOT EXISTS `store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_name` varchar(255) NOT NULL,
  `store_branch` varchar(255) NOT NULL,
  `store_address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `store_itemsSold` int DEFAULT NULL,
  `store_rating` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `store_name`, `store_branch`, `store_address`, `store_itemsSold`, `store_rating`) VALUES
(1, 'samplePharmacy', 'Makati', 'Chino Roces Ave, Legazpi Village, Makati City, 1223 Metro Manila', 0, 0),
(2, 'my pharmacy', 'Makati', 'Address, Makati City, 1123 Metro Manila', 0, 0),
(3, 'the allpharm', 'Makati', 'Address Street, Makati City, 1123 Metro Manila', 0, 0),
(4, 'pharmhouse', 'Makati', 'Arnaiz St., Makati City, 1123 Metro Manila', 0, 0),
(5, 'pharmastreet', 'Makati', 'my street, Makati City, 1123 Metro Manila', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_admin`
--

DROP TABLE IF EXISTS `user_admin`;
CREATE TABLE IF NOT EXISTS `user_admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id_role` tinyint NOT NULL,
  `joinDate` date NOT NULL,
  `activeStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ad_role` (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_admin`
--

INSERT INTO `user_admin` (`id`, `firstname`, `lastname`, `username`, `password`, `email`, `id_role`, `joinDate`, `activeStatus`) VALUES
(1, 'Myke', 'Martin', 'mykeMart', 'mickeyM12', 'mikeymartin@fire.com', 5, '2023-07-13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_courier`
--

DROP TABLE IF EXISTS `user_courier`;
CREATE TABLE IF NOT EXISTS `user_courier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `id_role` tinyint NOT NULL,
  `numOf_deliveredItems` int NOT NULL,
  `rating` float NOT NULL,
  `joinDate` date NOT NULL,
  `activeStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_co_role` (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_customer`
--

DROP TABLE IF EXISTS `user_customer`;
CREATE TABLE IF NOT EXISTS `user_customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `joinDate` date NOT NULL,
  `id_role` tinyint NOT NULL,
  `itemsPurchased` int DEFAULT NULL,
  `activeStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cu_role` (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_customer`
--

INSERT INTO `user_customer` (`id`, `firstname`, `lastname`, `username`, `password`, `phone`, `email`, `joinDate`, `id_role`, `itemsPurchased`, `activeStatus`) VALUES
(1, 'Mark', 'Robert', 'markRover12', 'fridgeofA25', NULL, 'markemail@gmail.com', '2023-07-04', 1, NULL, 1),
(2, 'Joke', 'Pri', 'JokeLangPri', 'jokelang', NULL, 'myemail@amazon.com', '2023-07-07', 1, NULL, 1),
(3, 'Joe', 'Ewan', 'Jokowan', 'Jokowan23', NULL, 'jokowan@gmail.com', '2023-07-07', 1, NULL, 1),
(4, 'Marsch', 'Toney', 'Marsch28', 'Marsch28', NULL, 'heartfire308@gmail.com', '2023-07-15', 1, NULL, 1),
(5, 'Heart', 'Rey', 'Heartrey', 'HeartRey27', NULL, 'heartrey29@gmail.com', '2023-07-20', 1, NULL, 1),
(6, 'Fello', 'Fee', 'Felofe', 'Felofe23', NULL, 'felofe23@gmail.com', '2023-07-20', 1, NULL, 1),
(7, 'a', 'bro', 'abro', 'Abro1234', NULL, 'abro@gmail.com', '2023-07-20', 1, NULL, 1),
(8, 'my', 'name', 'myname', 'myName23', NULL, 'myname@gmail.com', '2023-07-20', 1, NULL, 1),
(9, 'hello', 'fren', 'hefren', 'Hefren23', NULL, 'hefren@gmail.com', '2023-07-20', 1, NULL, 1),
(10, 'hello', 'fren', 'hefrends', 'Hefren23', NULL, 'hefrends@gmail.com', '2023-07-20', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_pharmacy_manager`
--

DROP TABLE IF EXISTS `user_pharmacy_manager`;
CREATE TABLE IF NOT EXISTS `user_pharmacy_manager` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `id_role` tinyint NOT NULL,
  `joinDate` date NOT NULL,
  `id_store` int DEFAULT NULL,
  `activeStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pm_role` (`id_role`),
  KEY `fk_pm_store` (`id_store`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_pharmacy_manager`
--

INSERT INTO `user_pharmacy_manager` (`id`, `firstname`, `lastname`, `username`, `password`, `phone`, `email`, `id_role`, `joinDate`, `id_store`, `activeStatus`) VALUES
(1, 'Marianne', 'Lorenzo', 'Marenzo', 'marenzO21', NULL, 'marenzo@gmail.com', 4, '2023-07-13', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_pharmacy_staff`
--

DROP TABLE IF EXISTS `user_pharmacy_staff`;
CREATE TABLE IF NOT EXISTS `user_pharmacy_staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `id_role` tinyint NOT NULL,
  `joinDate` date NOT NULL,
  `id_store` int DEFAULT NULL,
  `activeStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ps_role` (`id_role`),
  KEY `fk_ps_store` (`id_store`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_pharmacy_staff`
--

INSERT INTO `user_pharmacy_staff` (`id`, `firstname`, `lastname`, `username`, `password`, `phone`, `email`, `id_role`, `joinDate`, `id_store`, `activeStatus`) VALUES
(1, 'John', 'Doe', 'johndoe', 'myjohndoeA28', NULL, 'johndoe@gmail.com', 2, '2023-07-05', 2, 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_cart_user` FOREIGN KEY (`id_user`) REFERENCES `user_customer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `fk_cart` FOREIGN KEY (`id_cart`) REFERENCES `cart` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_cart_item` FOREIGN KEY (`id_item`) REFERENCES `items` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `fk_icategory` FOREIGN KEY (`id_category`) REFERENCES `item_category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_istore` FOREIGN KEY (`id_store`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_isymptom` FOREIGN KEY (`id_symptom`) REFERENCES `item_symptom` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `user_admin`
--
ALTER TABLE `user_admin`
  ADD CONSTRAINT `fk_ad_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `user_courier`
--
ALTER TABLE `user_courier`
  ADD CONSTRAINT `fk_co_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `user_customer`
--
ALTER TABLE `user_customer`
  ADD CONSTRAINT `fk_cu_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `user_pharmacy_manager`
--
ALTER TABLE `user_pharmacy_manager`
  ADD CONSTRAINT `fk_pm_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_pm_store` FOREIGN KEY (`id_store`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `user_pharmacy_staff`
--
ALTER TABLE `user_pharmacy_staff`
  ADD CONSTRAINT `fk_ps_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_ps_store` FOREIGN KEY (`id_store`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
