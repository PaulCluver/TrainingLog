USE [TrainingLog]

/*
CREATE TABLE LogEntry
(
	ID int IDENTITY(1,1) PRIMARY KEY,
	LogDate DateTime NOT NULL,
	ExerciseTypeID INT NOT NULL,
	Notes varchar(255)
)


CREATE TABLE ExerciseType
(
	ID int IDENTITY(1,1) PRIMARY KEY,
	Description varchar(255) NOT NULL
)

INSERT INTO [dbo].ExerciseType (Description) Values ('Standing')
INSERT INTO [dbo].ExerciseType (Description) Values ('Striking')
INSERT INTO [dbo].ExerciseType (Description) Values ('Turning')
INSERT INTO [dbo].ExerciseType (Description) Values ('Changing')

ALTER TABLE LogEntry
ADD FOREIGN KEY (ExerciseTypeID)
REFERENCES ExerciseType(ID)
*/

INSERT INTO [dbo].LogEntry (LogDate, ExerciseTypeID, Notes) Values ('2015-07-01', 1, 'Note 1')
INSERT INTO [dbo].LogEntry (LogDate, ExerciseTypeID, Notes) Values ('2015-07-01', 2, 'Note 2')
INSERT INTO [dbo].LogEntry (LogDate, ExerciseTypeID, Notes) Values ('2015-07-01', 3, 'Note 3')
INSERT INTO [dbo].LogEntry (LogDate, ExerciseTypeID, Notes) Values ('2015-07-01', 4, 'Note 4')