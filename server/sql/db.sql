-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema butterfly
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `butterfly` ;

-- -----------------------------------------------------
-- Schema butterfly
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `butterfly` DEFAULT CHARACTER SET utf8 ;
USE `butterfly` ;

-- -----------------------------------------------------
-- Table `butterfly`.`company`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `butterfly`.`company` ;

CREATE TABLE IF NOT EXISTS `butterfly`.`company` (
  `idCompany` INT NOT NULL AUTO_INCREMENT,
  `companyName` VARCHAR(30) NULL,
  PRIMARY KEY (`idCompany`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `butterfly`.`form`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `butterfly`.`form` ;

CREATE TABLE IF NOT EXISTS `butterfly`.`form` (
  `idForm` INT NOT NULL AUTO_INCREMENT,
  `formName` VARCHAR(45) NULL,
  `idCompany` INT NOT NULL,
  PRIMARY KEY (`idForm`),
  INDEX `fk_form_company_idx` (`idCompany` ASC) VISIBLE,
  CONSTRAINT `fk_form_company`
    FOREIGN KEY (`idCompany`)
    REFERENCES `butterfly`.`company` (`idCompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `butterfly`.`questionType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `butterfly`.`questionType` ;

CREATE TABLE IF NOT EXISTS `butterfly`.`questionType` (
  `idQuestionType` INT NOT NULL AUTO_INCREMENT,
  `questionType` VARCHAR(45) NULL,
  PRIMARY KEY (`idQuestionType`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `butterfly`.`questions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `butterfly`.`questions` ;

CREATE TABLE IF NOT EXISTS `butterfly`.`questions` (
  `idQuestions` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(100) NULL,
  `idForm` INT NOT NULL,
  `idQuestionType` INT NOT NULL,
  `message` VARCHAR(100) NULL,
  `resource` VARCHAR(100) NULL,
  PRIMARY KEY (`idQuestions`),
  INDEX `fk_questions_form1_idx` (`idForm` ASC) VISIBLE,
  INDEX `fk_questions_questionType1_idx` (`idQuestionType` ASC) VISIBLE,
  CONSTRAINT `fk_questions_form1`
    FOREIGN KEY (`idForm`)
    REFERENCES `butterfly`.`form` (`idForm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_questions_questionType1`
    FOREIGN KEY (`idQuestionType`)
    REFERENCES `butterfly`.`questionType` (`idQuestionType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `butterfly`.`answers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `butterfly`.`answers` ;

CREATE TABLE IF NOT EXISTS `butterfly`.`answers` (
  `idAnswers` INT NOT NULL AUTO_INCREMENT,
  `score` INT NOT NULL,
  `comment` VARCHAR(300) NULL,
  `idQuestions` INT NOT NULL,
  PRIMARY KEY (`idAnswers`),
  INDEX `fk_answers_questions1_idx` (`idQuestions` ASC) VISIBLE,
  CONSTRAINT `fk_answers_questions1`
    FOREIGN KEY (`idQuestions`)
    REFERENCES `butterfly`.`questions` (`idQuestions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
