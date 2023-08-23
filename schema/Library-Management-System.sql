CREATE TABLE `books` (
  `s_no` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `book_title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `added_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`s_no`),
  UNIQUE KEY `sNo_UNIQUE` (`s_no`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `s_no` int NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobilenumber` bigint DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`s_no`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
