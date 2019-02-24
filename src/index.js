/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var tringle=0;
  var t1, t2, t3, t4;
  var ind=[];
  for(var i=0;i<preferences.length;i++)
  {
    if((preferences[i]!=(i+1))&(preferences[i]>0)&(preferences[i]<((preferences.length)+1)))
    {
      t1=preferences[i];
      t2=preferences[t1-1];
      t3=preferences[t2-1];
      t4=preferences[t3-1];
          if((t1==t4)&(preferences[t1-1]!=t1)&(preferences[t2-1]!=t2)&(preferences[t3-1]!=t3))
        {
          tringle++;
          preferences[i]=0;
          preferences[t1-1]=0;
          preferences[t2-1]=0;
        }
    }
  }
  return (tringle);
};
