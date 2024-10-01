-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 01, 2024 at 09:06 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invoiceapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int NOT NULL,
  `date` date NOT NULL,
  `customer` varchar(255) NOT NULL,
  `salesperson` varchar(255) NOT NULL,
  `payment_type` varchar(225) NOT NULL,
  `notes` text NOT NULL,
  `updatedAt` date NOT NULL,
  `createdAt` date NOT NULL,
  `total_amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `date`, `customer`, `salesperson`, `payment_type`, `notes`, `updatedAt`, `createdAt`, `total_amount`) VALUES
(21, '2024-09-12', 'Yasmin', 'Vienna', 'Cash', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 35000),
(22, '2024-09-12', 'Yasmin', 'Vienna', 'dewd', 'dwedwe', '2024-09-27', '2024-09-27', 15000),
(23, '2024-09-12', 'Yasmin', 'Vienna', 'dewd', 'dwedwe', '2024-09-27', '2024-09-27', 15000),
(24, '2024-09-12', 'Yasmin', 'Vienna', 'dewd', 'dwedwe', '2024-09-27', '2024-09-27', 15000),
(25, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(26, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(27, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(28, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(29, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(30, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(31, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(32, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(33, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(34, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(35, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(36, '2024-09-26', 'Yasmin', 'cefc', 'ddd', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(37, '2024-09-13', 'Yasmin', 'dr3f3r', 'cec', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(38, '2024-09-13', 'Yasmin', 'dr3f3r', 'cec', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(39, '2024-09-13', 'Yasmin', 'dr3f3r', 'cec', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(40, '2024-09-13', 'Yasmin', 'dr3f3r', 'cec', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(41, '2024-09-13', 'Yasmin', 'dr3f3r', 'cec', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(42, '2024-09-13', 'Yasmin', 'dr3f3r', 'cec', 'Lorem Ipsum', '2024-09-27', '2024-09-27', 15000),
(43, '2023-01-28', 'Yasmin', 'cefc', 'crfecv', 'r3fr3', '2024-09-27', '2024-09-27', 15000),
(44, '2023-01-28', 'ihfuyi', 'cefc', 'crfecv', 'r3fr3', '2024-09-27', '2024-09-27', 30000),
(45, '2024-09-18', 'dede', 'nd', 'ngfn', 'nhg', '2024-09-27', '2024-09-27', 15000),
(46, '2024-02-18', 'dede', 'nd', 'ngfn', 'nhg', '2024-09-27', '2024-09-27', 15000),
(47, '2023-12-07', 'dede', 'nd', 'ngfn', 'nhg', '2024-09-27', '2024-09-27', 15000),
(48, '2024-09-13', 'dede', 'dse', 'fef', 'ferf', '2024-09-27', '2024-09-27', 20000),
(49, '0003-03-02', 'cqwf', 'cdccdec', 'cdcc', 'cedcd', '2024-09-30', '2024-09-30', 15000),
(50, '2024-09-17', 'cedc', 'cd', 'dw', 'xsd', '2024-09-30', '2024-09-30', 15000);

-- --------------------------------------------------------

--
-- Table structure for table `invoices_item`
--

CREATE TABLE `invoices_item` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `price` float NOT NULL,
  `quantity` int NOT NULL,
  `invoice_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `invoices_item`
--

INSERT INTO `invoices_item` (`id`, `product_id`, `price`, `quantity`, `invoice_id`) VALUES
(3, 3, 15000, 1, 21),
(4, 2, 20000, 1, 21),
(5, 3, 15000, 1, 22),
(6, 3, 15000, 1, 23),
(7, 3, 15000, 1, 24),
(8, 3, 15000, 1, 25),
(9, 3, 15000, 1, 26),
(10, 3, 15000, 1, 27),
(11, 3, 15000, 1, 28),
(12, 3, 15000, 1, 29),
(13, 3, 15000, 1, 30),
(14, 3, 15000, 1, 31),
(15, 3, 15000, 1, 32),
(16, 3, 15000, 1, 33),
(17, 3, 15000, 1, 34),
(18, 3, 15000, 1, 35),
(19, 3, 15000, 1, 36),
(20, 3, 15000, 1, 37),
(21, 3, 15000, 1, 38),
(22, 3, 15000, 1, 39),
(23, 3, 15000, 1, 40),
(24, 3, 15000, 1, 41),
(25, 3, 15000, 1, 42),
(26, 3, 15000, 1, 43),
(27, 3, 15000, 1, 44),
(28, 3, 15000, 1, 44),
(29, 3, 15000, 1, 45),
(30, 3, 15000, 1, 46),
(31, 3, 15000, 1, 47),
(32, 2, 20000, 1, 48),
(33, 3, 15000, 1, 49),
(34, 3, 15000, 1, 50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices_item`
--
ALTER TABLE `invoices_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_userr` (`invoice_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `invoices_item`
--
ALTER TABLE `invoices_item`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoices_item`
--
ALTER TABLE `invoices_item`
  ADD CONSTRAINT `fk_id_userr` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
