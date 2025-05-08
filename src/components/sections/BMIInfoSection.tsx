
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const BMIInfoSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="bmi-introduction" className="text-3xl font-bold mb-6">Understanding Your BMI</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Body Mass Index (BMI) is a value derived from the weight and height of a person. 
            The BMI is defined as the body mass divided by the square of the body height, and is 
            expressed in units of kg/m², resulting from weight in kilograms and height in meters.
          </p>
          
          <p className="mb-8">
            The calculated BMI value is used to categorize whether a person is underweight, normal weight, 
            overweight, or obese depending on what range the value falls between. These ranges of BMI vary 
            based on factors such as region and age, and are sometimes further divided into subcategories 
            such as severely underweight or very severely obese.
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">BMI Classification Tables</h3>
          
          <Tabs defaultValue="adults" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="adults">Adults (20+)</TabsTrigger>
              <TabsTrigger value="children">Children & Teens (2-20)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="adults">
              <h4 className="text-xl font-medium mb-3">WHO BMI Classification for Adults</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Classification</TableHead>
                      <TableHead>BMI Range (kg/m²)</TableHead>
                      <TableHead>Health Risk</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Severe Thinness</TableCell>
                      <TableCell>&lt; 16.0</TableCell>
                      <TableCell>Severe</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Moderate Thinness</TableCell>
                      <TableCell>16.0 - 16.9</TableCell>
                      <TableCell>Moderate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mild Thinness</TableCell>
                      <TableCell>17.0 - 18.4</TableCell>
                      <TableCell>Mild</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Normal weight</TableCell>
                      <TableCell className="font-medium">18.5 - 24.9</TableCell>
                      <TableCell className="font-medium">Minimal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Overweight</TableCell>
                      <TableCell>25.0 - 29.9</TableCell>
                      <TableCell>Increased</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Obesity Class I</TableCell>
                      <TableCell>30.0 - 34.9</TableCell>
                      <TableCell>High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Obesity Class II</TableCell>
                      <TableCell>35.0 - 39.9</TableCell>
                      <TableCell>Very High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Obesity Class III</TableCell>
                      <TableCell>&ge; 40.0</TableCell>
                      <TableCell>Extremely High</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="children">
              <h4 className="text-xl font-medium mb-3">CDC BMI Classification for Children and Teens</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Classification</TableHead>
                      <TableHead>Percentile Range</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Underweight</TableCell>
                      <TableCell>Less than the 5th percentile</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Healthy weight</TableCell>
                      <TableCell className="font-medium">5th percentile to less than the 85th percentile</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Overweight</TableCell>
                      <TableCell>85th percentile to less than the 95th percentile</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Obesity</TableCell>
                      <TableCell>Equal to or greater than the 95th percentile</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                For children and teens, BMI is age- and sex-specific and is often referred to as BMI-for-age.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 id="risks-overweight" className="text-2xl font-semibold mb-4">Risks Associated with Being Overweight</h3>
            <p className="mb-4">According to the CDC, being overweight or obese increases the risk of developing:</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>High blood pressure</li>
              <li>High LDL cholesterol and low HDL cholesterol</li>
              <li>Type II diabetes</li>
              <li>Coronary heart disease</li>
              <li>Stroke</li>
              <li>Gallbladder disease</li>
              <li>Osteoarthritis</li>
              <li>Sleep apnea and breathing problems</li>
              <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
              <li>Low quality of life</li>
              <li>Mental illnesses such as depression and anxiety</li>
              <li>Body pain and difficulty with physical functioning</li>
            </ul>
            <p>
              Generally, an increased risk of mortality compared to those with a healthy BMI has been 
              identified. It's recommended to try to keep a BMI below 25 kg/m², but ideally consult 
              your doctor to determine if you need to make any changes to your lifestyle.
            </p>
          </div>
          
          <div>
            <h3 id="risks-underweight" className="text-2xl font-semibold mb-4">Risks Associated with Being Underweight</h3>
            <p className="mb-4">Being underweight has its own set of health risks, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Malnutrition, vitamin deficiencies, anemia</li>
              <li>Osteoporosis and bone density loss</li>
              <li>Decreased immune function</li>
              <li>Growth and development issues (in children and teens)</li>
              <li>Reproductive issues in women (e.g., absence of menstruation, infertility)</li>
              <li>Increased risk of complications from surgery</li>
              <li>Generally increased risk of mortality</li>
            </ul>
            <p>
              Being underweight can also be a sign of an underlying condition or disorder, such as anorexia 
              nervosa. If you're underweight and the reason isn't obvious (such as intense athletic training), 
              it's advisable to consult with a healthcare professional.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 id="limitations-bmi" className="text-2xl font-semibold mb-4">Limitations of BMI</h3>
          <p className="mb-4">
            While BMI is a widely used tool for determining weight categories, it has several limitations that should be considered:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Body Composition Not Considered:</strong> BMI is only an estimate and cannot take body composition into account. 
              It doesn't differentiate between muscle, bone, fat, and other tissues.
            </li>
            <li>
              <strong>Individual Variation:</strong> Due to varying body types and distribution of muscle, bone mass, and fat, 
              BMI should be considered along with other measurements rather than as the sole method.
            </li>
            <li>
              <strong>Age and Gender Differences:</strong> According to the CDC, older adults tend to have more body fat than younger adults 
              with the same BMI, and women tend to have more body fat than men for an equivalent BMI.
            </li>
            <li>
              <strong>Athletic Builds:</strong> Muscular individuals and athletes may have higher BMIs due to increased muscle mass, 
              despite having healthy body fat levels.
            </li>
            <li>
              <strong>Children and Adolescents:</strong> For children and adolescents, height and sexual maturation influence BMI. 
              BMI is a better indicator of excess body fat for obese children than overweight children.
            </li>
          </ul>
          <p>
            Despite these limitations, BMI is fairly indicative of body fat for 90-95% of the population and can effectively 
            be used along with other measures like waist circumference and health risk factors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 id="bmi-formula" className="text-2xl font-semibold mb-4">BMI Formula</h3>
            <p className="mb-4">BMI is calculated using the following formulas:</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium">International System of Units (SI):</h4>
              <p className="font-mono mt-2">BMI = weight(kg) / height²(m²)</p>
              
              <div className="mt-4">
                <h5 className="font-medium">Example Calculation:</h5>
                <p className="mt-1">Weight = 68 kg, Height = 1.65 m</p>
                <p className="font-mono mt-1">BMI = 68 / (1.65)² = 25.0 kg/m²</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium">US Customary System (USC):</h4>
              <p className="font-mono mt-2">BMI = 703 × weight(lb) / height²(in²)</p>
              
              <div className="mt-4">
                <h5 className="font-medium">Example Calculation:</h5>
                <p className="mt-1">Weight = 150 lbs, Height = 5'5" (65")</p>
                <p className="font-mono mt-1">BMI = 703 × 150 / (65)² = 25.0 kg/m²</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 id="related-metrics" className="text-2xl font-semibold mb-4">Related Metrics</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2">BMI Prime</h4>
              <p className="mb-3">
                BMI Prime is the ratio of measured BMI to the upper limit of "normal" BMI (typically 25 kg/m²).
              </p>
              <p className="font-mono mb-3">BMI Prime = BMI / 25</p>
              <p>
                BMI Prime allows for a quick assessment of the difference from the upper normal limit and enables comparison between groups.
              </p>
              
              <div className="overflow-x-auto mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>BMI Prime</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Underweight</TableCell>
                      <TableCell>&lt; 0.74</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Normal weight</TableCell>
                      <TableCell>0.74 - 1.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Overweight</TableCell>
                      <TableCell>1.00 - 1.20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Obese</TableCell>
                      <TableCell>&ge; 1.20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-2">Ponderal Index</h4>
              <p className="mb-3">
                The Ponderal Index (PI) is similar to BMI, measuring leanness or corpulence based on height and weight.
                The key difference is that it cubes the height instead of squaring it.
              </p>
              <p className="font-mono mb-3">PI = weight(kg) / height³(m³)</p>
              <p>
                The Ponderal Index is considered to be more reliable for very tall or short individuals compared to BMI,
                as it normalizes weight with respect to height cubed rather than squared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMIInfoSection;
