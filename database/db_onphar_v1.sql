-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 09, 2023 at 06:35 AM
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
  `id_store` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_icategory` (`id_category`),
  KEY `fk_isymptom` (`id_symptom`),
  KEY `fk_istore` (`id_store`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `id_category`, `id_symptom`, `remaining_stock`, `description`, `item_dateListed`, `rating`, `ActiveStatus`, `quantity_sold`, `id_store`) VALUES
(1, 'Aspirin', 120, 1, 1, 50, 'Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation.', '2023-07-01', 4.5, 1, 50, 1),
(2, 'Ibuprofen', 89, 1, 1, 150, 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce fever, and reduce inflammation.', '2023-07-02', 4.2, 1, 50, 3),
(3, 'Paracetamol', 50, 1, 1, 100, 'Paracetamol is a commonly used medication to relieve mild to moderate pain and reduce fever.', '2023-07-03', 4, 1, 50, 4),
(4, 'Loratadine', 170, 2, 2, 20, 'Loratadine is an antihistamine used to relieve allergy symptoms such as runny nose, sneezing, itchy or watery eyes, and itching in the nose or throat.', '2023-07-04', 4.3, 1, 50, 1),
(5, 'Omeprazole', 250, 3, 3, 75, 'Omeprazole is a proton pump inhibitor (PPI) used to reduce stomach acid production and treat conditions like heartburn, gastroesophageal reflux disease (GERD), and stomach ulcers.', '2023-07-05', 4.5, 1, 50, 1),
(6, 'Cetirizine', 150, 2, 2, 60, 'Cetirizine is an antihistamine used to relieve allergy symptoms such as sneezing, itching, watery eyes, or runny nose.', '2023-07-06', 4.1, 1, 50, 3),
(7, 'Simvastatin', 240, 4, 4, 90, 'Simvastatin is a statin medication used to lower cholesterol and triglyceride levels in the blood.', '2023-07-07', 4.2, 1, 50, 1),
(8, 'Metformin', 240, 4, 5, 180, 'Metformin is an oral medication used to lower blood sugar levels in individuals with type 2 diabetes.', '2023-07-08', 4.3, 1, 50, 1),
(9, 'Amoxicillin', 180, 5, 6, 40, 'Amoxicillin is an antibiotic used to treat a wide range of bacterial infections, including respiratory infections, ear infections, and urinary tract infections.', '2023-07-09', 4.4, 1, 50, 1),
(10, 'Prednisone', 200, 1, 1, 30, 'Prednisone is a corticosteroid used to treat conditions such as allergic disorders, skin conditions, arthritis, lupus, and breathing disorders.', '2023-07-10', 4.6, 1, 50, 2),
(11, 'Atorvastatin', 80, 4, 4, 80, 'Atorvastatin is a statin medication used to lower high cholesterol levels and reduce the risk of heart disease.', '2023-07-11', 4.2, 1, 50, 2),
(12, 'Diazepam', 100, 6, 7, 60, 'Diazepam is a medication used to treat anxiety, muscle spasms, seizures, and alcohol withdrawal symptoms.', '2023-07-12', 4.3, 1, 50, 3),
(13, 'Sertraline', 160, 6, 8, 90, 'Sertraline is an antidepressant medication used to treat depression, panic attacks, obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD).', '2023-07-13', 4.5, 1, 50, 2),
(14, 'Metoprolol', 180, 7, 9, 130, 'Metoprolol is a beta-blocker used to treat high blood pressure, angina (chest pain), and heart failure.', '2023-07-14', 4.1, 1, 50, 2),
(15, 'Losartan', 290, 7, 9, 80, 'Losartan is an angiotensin II receptor blocker (ARB) used to treat high blood pressure and protect the kidneys from damage due to diabetes.', '2023-07-15', 4.4, 1, 50, 5),
(16, 'Levothyroxine', 49, 8, 10, 180, 'Levothyroxine is a medication used to replace or supplement thyroid hormone in individuals with an underactive thyroid gland (hypothyroidism).', '2023-07-16', 4.3, 1, 50, 4),
(17, 'Warfarin', 80, 8, 10, 40, 'Warfarin is an anticoagulant medication used to prevent blood clotting and reduce the risk of stroke, heart attack, and other blood clot-related conditions.', '2023-07-17', 4.2, 1, 50, 3),
(18, 'Albuterol', 60, 8, 10, 80, 'Albuterol is a bronchodilator used to relieve asthma symptoms, including wheezing, shortness of breath, coughing, and chest tightness.', '2023-07-18', 4, 1, 50, 5),
(19, 'Fluoxetine', 130, 8, 10, 60, 'Fluoxetine is an antidepressant medication used to treat depression, obsessive-compulsive disorder (OCD), panic disorder, and bulimia nervosa.', '2023-07-19', 4.4, 1, 50, 5),
(20, 'Ciprofloxacin', 120, 8, 10, 100, 'Ciprofloxacin is an antibiotic used to treat various bacterial infections, including urinary tract infections, respiratory infections, skin infections, and gastrointestinal infections.', '2023-07-20', 0, 1, 0, 2);

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
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id_role` tinyint NOT NULL,
  `joinDate` date NOT NULL,
  `activeStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ad_role` (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_courier`
--

DROP TABLE IF EXISTS `user_courier`;
CREATE TABLE IF NOT EXISTS `user_courier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
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
  `middlename` varchar(255) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_customer`
--

INSERT INTO `user_customer` (`id`, `firstname`, `middlename`, `lastname`, `username`, `password`, `phone`, `email`, `joinDate`, `id_role`, `itemsPurchased`, `activeStatus`) VALUES
(1, 'Mark', 'Hello', 'Robert', 'markRover12', 'fridgeofA25', NULL, 'markemail@gmail.com', '2023-07-04', 1, NULL, 1),
(2, 'Joke', 'Lang', 'Pri', 'JokeLangPri', 'jokelang', NULL, 'myemail@amazon.com', '2023-07-07', 1, NULL, 1),
(3, 'Joe', 'Kolo', 'Ewan', 'Jokowan', 'Jokowan23', NULL, 'jokowan@gmail.com', '2023-07-07', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_pharmacy_manager`
--

DROP TABLE IF EXISTS `user_pharmacy_manager`;
CREATE TABLE IF NOT EXISTS `user_pharmacy_manager` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `id_role` tinyint NOT NULL,
  `joinDate` date NOT NULL,
  `store` int DEFAULT NULL,
  `activeStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pm_role` (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_pharmacy_staff`
--

DROP TABLE IF EXISTS `user_pharmacy_staff`;
CREATE TABLE IF NOT EXISTS `user_pharmacy_staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
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
  KEY `fk_ps_role` (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_pharmacy_staff`
--

INSERT INTO `user_pharmacy_staff` (`id`, `firstname`, `middlename`, `lastname`, `username`, `password`, `phone`, `email`, `id_role`, `joinDate`, `id_store`, `activeStatus`) VALUES
(1, 'John', 'Harvey', 'Doe', 'johndoe', 'myjohndoeA28', NULL, 'johndoe@gmail.com', 2, '2023-07-05', NULL, 1);

--
-- Constraints for dumped tables
--

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
  ADD CONSTRAINT `fk_pm_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `user_pharmacy_staff`
--
ALTER TABLE `user_pharmacy_staff`
  ADD CONSTRAINT `fk_ps_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
