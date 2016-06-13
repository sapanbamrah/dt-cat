import {Injectable} from 'angular2/core';

@Injectable()
export class CatsListService{
    fetchList(){

let data ={  
   "cats":[  
      {  
         "name":"abyssinian",
         "image":"abyssinian.jpg",
         "temperament":"active",
         "grooming":"easy",
         "energy":"high"
      },
      {  
         "name":"american bobtail",
         "image":"american-bobtail.jpg",
         "temperament":"affable",
         "grooming":"easy",
         "energy":"average"
      },
      {  
         "name":"australian mist",
         "image":"australian-mist.jpg",
         "temperament":"pleasant",
         "grooming":"easy",
         "energy":"high"
      },
      {  
         "name":"birman",
         "image":"birman.jpg",
         "temperament":"reserved",
         "grooming":"average",
         "energy":"average"
      },
      {  
         "name":"egyptian mau",
         "image":"egytian-mau.jpg",
         "temperament":"intelligent",
         "grooming":"easy",
         "energy":"high"
      },
      {  
         "name":"himalayan",
         "image":"himalayan.jpg",
         "temperament":"docile",
         "grooming":"difficult",
         "energy":"average"
      },
      {  
         "name":"javanese",
         "image":"javanese.jpg",
         "temperament":"vocal",
         "grooming":"easy",
         "energy":"high"
      },
      {  
         "name":"manx",
         "image":"manx.jpg",
         "temperament":"even-tempered",
         "grooming":"average",
         "energy":"average"
      },
      {  
         "name":"napoleon",
         "image":"napoleon.jpg",
         "temperament":"charming",
         "grooming":"high",
         "energy":"average"
      },
      {  
         "name":"persian",
         "image":"persian.jpg",
         "temperament":"passive",
         "grooming":"high",
         "energy":"average"
      },
      {  
         "name":"peterbald",
         "image":"peterbald.jpg",
         "temperament":"demanding",
         "grooming":"average",
         "energy":"average"
      },
      {  
         "name":"ragdoll",
         "image":"ragdoll.jpg",
         "temperament":"placid",
         "grooming":"easy",
         "energy":"low"
      },
      {  
         "name":"ragamuffin",
         "image":"ragamuffin.jpg",
         "temperament":"laid-back",
         "grooming":"average",
         "energy":"average"
      },
      {  
         "name":"scottish fold",
         "image":"scottish-fold.jpg",
         "temperament":"easy nature",
         "grooming":"average",
         "energy":"average"
      },
      {  
         "name":"siamese",
         "image":"siamese.jpg",
         "temperament":"active",
         "grooming":"easy",
         "energy":"high"
      },
      {  
         "name":"singapura",
         "image":"singapura.jpg",
         "temperament":"affectionate",
         "grooming":"easy",
         "energy":"high"
      }
   ]
};

        return data["cats"];
    }
}