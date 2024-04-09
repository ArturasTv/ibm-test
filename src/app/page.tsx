'use client';
import { Button, Header, HeaderGlobalAction, HeaderGlobalBar, HeaderName, HeaderPanel, SwitcherDivider, SwitcherItem, Toggle } from '@carbon/react';
import { RadarChart, RadarChartOptions, ScaleTypes, ScatterChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { useState } from 'react';
import { Notification, Search, Switcher } from '@carbon/icons-react';
const initialData= [
  {
    "product": "Product 1",
    "feature": "Price",
    "score": 60
  },
  {
    "product": "Product 1",
    "feature": "Usability",
    "score": 92
  },
  {
    "product": "Product 1",
    "feature": "Availability",
    "score": 5
  },
  {
    "product": "Product 1",
    "feature": "Performance",
    "score": 85
  },
  {
    "product": "Product 1",
    "feature": "Quality",
    "score": 60
  },
  {
    "product": "Product 2",
    "feature": "Price",
    "score": 70
  },
  {
    "product": "Product 2",
    "feature": "Usability",
    "score": 63
  },
  {
    "product": "Product 2",
    "feature": "Availability",
    "score": 78
  },
  {
    "product": "Product 2",
    "feature": "Performance",
    "score": 50
  },
  {
    "product": "Product 2",
    "feature": "Quality",
    "score": 30
  }];

const scatterData = [
	{
		"group": "Dataset 1",
		"date": "2019-01-01T00:00:00.000Z",
		"value": 50000,
		"surplus": 1169548731.4747086
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-05T00:00:00.000Z",
		"value": 65000,
		"surplus": 1140830690.4192266
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-08T00:00:00.000Z",
		"value": null,
		"surplus": 12118.780987249806
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-13T00:00:00.000Z",
		"value": 49213,
		"surplus": 379709105.7035381
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-17T00:00:00.000Z",
		"value": 51213,
		"surplus": 870153074.32097
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-02T00:00:00.000Z",
		"value": 0,
		"surplus": 21240.54203151024
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-06T00:00:00.000Z",
		"value": 57312,
		"surplus": 187532604.94264767
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-08T00:00:00.000Z",
		"value": 27432,
		"surplus": 84759317.15128757
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-15T00:00:00.000Z",
		"value": 70323,
		"surplus": 507455935.1155939
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-19T00:00:00.000Z",
		"value": 21300,
		"surplus": 375359827.9375926
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-01T00:00:00.000Z",
		"value": 40000,
		"surplus": 209648225.56398377
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-05T00:00:00.000Z",
		"value": null,
		"surplus": 20633.355744518776
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-08T00:00:00.000Z",
		"value": 18000,
		"surplus": 136755412.92499962
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-13T00:00:00.000Z",
		"value": 39213,
		"surplus": 192346985.45582983
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-17T00:00:00.000Z",
		"value": 61213,
		"surplus": 978265400.1281519
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-02T00:00:00.000Z",
		"value": 20000,
		"surplus": 58527144.70138342
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-06T00:00:00.000Z",
		"value": 37312,
		"surplus": 432158644.9198126
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-08T00:00:00.000Z",
		"value": 51432,
		"surplus": 707331554.2301666
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-15T00:00:00.000Z",
		"value": 25332,
		"surplus": 186148975.15336564
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-19T00:00:00.000Z",
		"value": null,
		"surplus": 6915.028406565021
	}
]

const scatterOptions = {
	"title": "Scatter (time series)",
	"axes": {
		"bottom": {
			"title": "2019 Annual Sales Figures",
			"scaleType": ScaleTypes.TIME,
			"mapsTo": "date"
		},
		"left": {
			"mapsTo": "value"
		}
	},
	"height": "400px"
}



export default function Home() {
  const [view, setView] = useState("radar");


  const [data, setData] = useState(initialData);

  const [features, setFeatures] = useState([
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6",
    "Feature 7",
    "Feature 8",
    "Feature 9",
    "Feature 10",
  ]);



  const [products, setProducts] = useState([
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
    "Product 9",
    "Product 10",
  ]);

  const generateRandomData = () => {
    if(features.length === 0) return;

    const newData = [...data];
    const randomFeatureIndex = Math.floor(Math.random() * features.length);

    const randomFeature = features[randomFeatureIndex];
    
    // go from all products and add a random score for the random feature

    // get unique products from data 

    const uniqueProducts = Array.from(new Set(data.map(d => d.product)));

    uniqueProducts.forEach(product => {
      newData.push({
        product: product,
        feature: randomFeature,
        score: Math.floor(50 + Math.random() * 50)
      });
    });

    const newFeatures = features.filter((feature, index) => index !== randomFeatureIndex);

    setFeatures(newFeatures);

    setData(newData);
  }

  const generateMoreProduct = () => {
    // take a random product when go throw data object find unique features and update data with new product and every feature with random score
    if(products.length === 0) return;

    const newData = [...data];

    const randomProductIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomProductIndex];

    const uniqueFeatures = Array.from(new Set(data.map(d => d.feature)));

    uniqueFeatures.forEach(feature => {
      newData.push({
        product: randomProduct,
        feature: feature,
        score: Math.floor(50 + Math.random() * 50)
      });
    });

    const newProducts = products.filter((product, index) => index !== randomProductIndex);

    setProducts(newProducts);

    setData(newData);
  }


  const removeRandomProduct = () => {
    // take a random product when go throw data object find unique features and update data with new product and every feature with random score
    const newData = [...data];

    const uniqueProducts = Array.from(new Set(data.map(d => d.product)));

    const randomProductIndex = Math.floor(Math.random() * uniqueProducts.length);
    const randomProduct = uniqueProducts[randomProductIndex];


    const newProducts = [...products, randomProduct];

    const newProductData = newData.filter(d => d.product !== randomProduct);

    setProducts(newProducts);

    setData(newProductData);
  }

   const options = {
      "title": "Radar",
      "radar": {
        "axes": {
          "angle": "feature",
          "value": "score"
        }
      },
      "data": {
        "groupMapsTo": "product"
      },
      "height": "85vh",
    } satisfies RadarChartOptions;

  return (
    <main>
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="Testing">
            [Charts]
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
              <Search size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications" >
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction  aria-label="Menu"   tooltipAlignment="end">
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <HeaderPanel  href="#switcher-button">
            <Switcher aria-label="Switcher Container">
              <SwitcherItem aria-label="Link 1" >
                Link 1
              </SwitcherItem>
              <SwitcherDivider />
              <SwitcherItem aria-label="Link 2">
                Link 2
              </SwitcherItem>
              <SwitcherItem  aria-label="Link 3">
                Link 3
              </SwitcherItem>
              <SwitcherItem aria-label="Link 4">
                Link 4
              </SwitcherItem>
              <SwitcherItem  aria-label="Link 5">
                Link 5
              </SwitcherItem>
              <SwitcherDivider />
              <SwitcherItem  aria-label="Link 6">
                Link 6
              </SwitcherItem>
            </Switcher>
          </HeaderPanel>
        </Header>


      <div className='flex w-full mt-12'> 
      {
        view === "radar" && <> 
            <Button disabled={features.length === 0} onClick={()=>generateRandomData()}>Add more random features</Button>
            <Button disabled={products.length === 0} onClick={()=>generateMoreProduct()}>Add more random products</Button>

            <Button kind="danger" disabled={Array.from(new Set(data.map(d => d.product))).length === 1}  onClick={()=>removeRandomProduct()}>Remove random product</Button>
        </>
      }
        <Toggle className="ml-auto p-4"  labelA="Radar" labelB="Scatter"  id="toggle-1" onClick={()=>setView(view === "radar" ? "scatter": "radar")} />
      </div>

    {
      view === "radar" ? 
      <RadarChart
        data={data}
        options={options}>
      </RadarChart> : 
      <ScatterChart
        data={scatterData}
        options={scatterOptions}>
      </ScatterChart>
    }

    </main>
  );
}
