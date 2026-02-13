import fs from 'fs/promises';
import path from 'path';


async function saveStructured(data: any[], query: string, outputDir: string = 'output') {
               try {
                              await fs.mkdir(outputDir, { recursive: true });
                              
                              const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                              const fileName = path.join(outputDir, `scrape_${timestamp}.json`)

                              const result ={
                                             metadata:{
                                                       scrapedAt: new Date().toISOString(),
        source: 'Google News',
        totalItems: data.length,
        query: query         
                                             }, data: data

                                              
                              }
                              await fs.writeFile(fileName, JSON.stringify(result, null,2 ));
                              //     await saveAsCSV(data, path.join(outputDir, `scrape_${timestamp}.csv`));
                                  return fileName;
               } catch (error) {
                              console.error(error)
throw error;

                              
               }
}

// async function saveAsCSV(data: any[], filePath: string) {
//   if (data.length === 0) return;

//   const headers = Object.keys(data[0]).join(', ')
// }