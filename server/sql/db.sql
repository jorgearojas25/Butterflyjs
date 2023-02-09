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
  `date` DATE NULL,
  `userId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAnswers`),
  INDEX `fk_answers_questions1_idx` (`idQuestions` ASC) VISIBLE,
  CONSTRAINT `fk_answers_questions1`
    FOREIGN KEY (`idQuestions`)
    REFERENCES `butterfly`.`questions` (`idQuestions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO `butterfly`.`company` (`companyName`) VALUES ('JorgeRojas');

INSERT INTO `butterfly`.`form` (`formName`, `idCompany`) VALUES ('How is your week going?', '1');


INSERT INTO `butterfly`.`questiontype` (`questionType`) VALUES ('mood');
INSERT INTO `butterfly`.`questiontype` (`questionType`) VALUES ('Roles and Responsibilities');
INSERT INTO `butterfly`.`questiontype` (`questionType`) VALUES ('Workplace');
INSERT INTO `butterfly`.`questiontype` (`questionType`) VALUES ('Management');
INSERT INTO `butterfly`.`questiontype` (`questionType`) VALUES ('Teamwork');
INSERT INTO `butterfly`.`questiontype` (`questionType`) VALUES ('Work/Life Balance');


INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`) VALUES ('I am satisfied with my roles and responsibilities.', '1', '2');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`) VALUES ('I like my work environment, and I believe it helps me perform at my best.', '1', '3');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`) VALUES ('My direct manager gives me necessary support and clear objectives.', '1', '4');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`) VALUES ('I feel comfortable working and interacting with the colleagues on my team.', '1', '5');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`) VALUES ('I feel like I have a healthy work/life balance.', '1', '6');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`, `message`, `resource`) VALUES ('1mood', '1', '1', 'Oops, something needs to change. Thank you for your Feedback.', 'https://svgur.com/i/q8g.svg');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`, `message`, `resource`) VALUES ('2mood', '1', '1', 'Mmmmh, things should improve. Thank you for your Feedback.', 'https://svgur.com/i/qAe.svg');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`, `message`, `resource`) VALUES ('3mood', '1', '1', 'OK… things could be better. Thank you for your Feedback.', 'https://svgur.com/i/q9Z.svg');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`, `message`, `resource`) VALUES ('4mood', '1', '1', 'Great! Thank you for your Feedback.', 'https://svgur.com/i/qAn.svg');
INSERT INTO `butterfly`.`questions` (`question`, `idForm`, `idQuestionType`, `message`, `resource`) VALUES ('5mood', '1', '1', 'Awesome! Thank you for your Feedback.', 'https://svgur.com/i/qB5.svg');



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
