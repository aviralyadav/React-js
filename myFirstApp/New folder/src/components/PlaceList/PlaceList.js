import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
    // const placeOutput = props.places.map((place, i)=> 
    //         (<ListItem key={i} onItemPressed={()=>{props.onItemDeleted(i)}} placeName={place} />)
    //     );
    return(
    <FlatList 
    style={styles.listContainer}
    data={props.places}
    renderItem={ (info) => (
          <ListItem onItemPressed={()=>{props.onItemSelected(info.item.key)}} imageName={info.item.image} placeName={info.item.name} />
    )
       
    }>
    </FlatList>
);
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
      }
});

export default placeList;