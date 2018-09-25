# Cohort 6 Productions Operation Procedures Automation
<p align="center">
  <img src="https://github.com/ivanoung/C6P-Dashboard-Script/blob/master/Assets/banner.png?raw=true" />
</p>
<div align="center">
  <h3>
    <a href="https://www.useloom.com/share/03d0d763bf914480a325b5ea4d38e193">
      Demo Video
    </a>
    <span> | </span>
    <a href="https://github.com/ivanoung/C6P-Dashboard-Script">
      Github Repo
    </a>
    <span> | </span>
    <a href="https://www.cohort6productions.com/">
      Cohort 6 Productions Hong Kong
    </a>
  </h3>
</div>

# What is this?
This is a google script that aims to create a automized and standardized operational system for Cohort 6 Productions. Mainly it automizes the client onboarding operational procedures, such as creating folder structures, copying templates, replacing content with new client's name and company, date of creation, etc.

The goal of this script is to optimize and standardize process that are time-consuming and distractive, using automation process to reduct time lost and improve performance of the company. The possibility of this structure can do has no end, however it's something that's often being undervalued by small businesses. 

## 2018.09.25 version 1.0.1
### Added
- function replaceAll to replace placeholders with user inputs
- Gif demo for demonstration
### Changed
- changed "[]" square bracketed placeholders with "{{someThing_someThing}}" for better regex search


## 2018.09.01 version 1.0.0
### Added
- Added a new folder structure
- Decoupled the code into smaller, controlable modules
<p align="center">
  <img src="https://github.com/ivanoung/C6P-Dashboard-Script/blob/master/Assets/folderStructure.png?raw=true" />
</p>


## version 0.0.1
### Added
- User can create folder structure using tab within sheet (Only first row)
- Toast to notify upon script completion