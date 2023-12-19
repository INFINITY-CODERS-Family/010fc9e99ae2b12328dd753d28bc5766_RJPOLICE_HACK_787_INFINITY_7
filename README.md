# Rajasthan POLICE hackathon

# Financial Fraud Detection App  
## Overview  
This ***React.js*** application utilizes a robust tech stack for developing a financial fraud detection system. ***ReactApexCharts*** and ***Supabase*** handle data visualization and management, ***Kaagle*** datasets provide sample financial data, and ***Material-UI (MUI)*** ensures an elegant and responsive user interface. The core functionality focuses on detecting financial frauds using several **machine learning algorithms**, including ***Logistic Regression, Disjoint Tree, Random Clusters, and K-beans Clustering.*** 
## Tech Stack  
- **Frontend**:  
	- React.js: A JavaScript library for building user interfaces.   
	- ReactApexCharts: A React wrapper for ApexCharts, enabling interactive data visualizations.   
	- Material-UI (MUI): A popular React UI framework for creating responsive and visually appealing designs.  
- **Backend**:   
	- **Supabase**: 
		- An open-source alternative to Firebase, providing a real-time database and authentication services.  
	- **Data Handling**:   
		- **Kaagle Datasets**: Utilized for providing realistic sample financial data for testing and demonstration.  
		- **Machine Learning Algorithms**:   
			- Logistic Regression: A regression algorithm used for binary classification tasks.  
			- Disjoint Tree: An ensemble learning algorithm that builds a disjoint set of decision trees.   
			- Random Clusters: A clustering algorithm that assigns data points to random clusters.   
			- K-beans Clustering: A popular clustering algorithm for grouping data points into clusters. 
## Features 

- **Data Visualization**: Utilizes ReactApexCharts to provide insightful visualizations of financial data.
- **Data Management**: Integrates Supabase for efficient data handling and database management.
- **Sample Data**: Utilizes Kaagle datasets for sample financial data to test and showcase the application. 
- **Machine Learning Algorithms**:   
  - Logistic Regression   
  - Disjoint Tree   
  - Random Clusters   
  - K-beans Clustering  
## Installation  

1. Clone the repository:  
  ```bash
  cd financial-fraud-detection-app
  ```
2. Navigate to the project directory:
  ```bash
  cd financial-fraud-detection-app
  ```
3. Install dependencies:
  ```bash
  npm install
  ```
## Usage

1. Start the development server:
  ```bash
  npm start
  ```
2. Open your browser and visit [http://localhost:3000/police](http://localhost:3000/police)

## Configuration

Make sure to configure your **Supabase** credentials in the application for seamless data integration. Update the configuration file at `src/createClient.js` with your Supabase details.

```javascript
//src/createClient.js  
const supabaseConfig = {   
	apiKey: 'YOUR_SUPABASE_API_KEY',   
	authDomain: 'YOUR_SUPABASE_AUTH_DOMAIN',   
	// ... other configurations 
};  
export default supabaseConfig;
```

## Contributing

Feel free to contribute to the project. Create a fork of the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- ### A very Special Thanks to @Rajasthan_Police to give this wonderful appournity to partice in this Hackathon.
- Special thanks to ***Kaagle*** for providing the datasets used in this project.
- ***React.js, ReactApexCharts, Supabase, and Material-UI*** for making development enjoyable and efficient.

## Warning⚠️⚠️
### This application still under technical progress...
