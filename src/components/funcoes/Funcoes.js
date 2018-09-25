import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Modal,
    TouchableWithoutFeedback, 
    Button 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ponta = require('../../imgs/Icon/ponta.png');

export const capituloCinco = rowData => {
    return (
        <View>
            <Text style={styles.subTitles}> Vocabulary: Make offers and promisses.</Text>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>Be supposed to: Firt Use</Text>
                <Text style={styles.conteudo}>{rowData.vocaluraio.beSupposedTo}</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.beSupposedToEx1}</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.beSupposedToEx2}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>Be supposed to: Second Use</Text>
                <Text style={styles.conteudo}>{rowData.vocaluraio.beSupposedTo2}</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.beSupposedToEx3}</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.beSupposedToEx4}</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.beSupposedToEx5}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <TouchableWithoutFeedback>
                    <Image 
                        source={rowData.vocaluraio.imgSupposed} 
                        resizeMode="contain"
                        style={{ width: 312, height:85, backgroundColor: '#CCC', marginBottom: 5 }}
                        overflow='hidden'
                        borderRadius={5}
                    />                    
                </TouchableWithoutFeedback> 
                <Button
                    color="#000000"
                    title='Ver imagem.'
                    onPress={() => Actions.ImageElement(rowData.vocaluraio.imgSupposed)}
                />
            </View>   
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>Be meant to:</Text>
                <Text style={styles.conteudo}>{rowData.vocaluraio.beMeantTo}</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.beMeantToEx1}</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.beMeantToEx1}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>No chance:</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.noChance}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>No Way:</Text>
                <Text style={styles.conteudo}>-- {rowData.vocaluraio.noWay}</Text>
            </View>
            <Text style={styles.subTitles}> Gramma: Future forms.</Text>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>Will:</Text>
                <Text style={styles.conteudo}>-- {rowData.gramma.Will}</Text>
                <Text style={styles.conteudo}>-- {rowData.gramma.WillEx1}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>Ing:</Text>
                <Text style={styles.conteudo}>-- {rowData.gramma.ing}</Text>
                <Text style={styles.conteudo}>-- {rowData.gramma.ingEx1}</Text>
            </View>
            <Text style={styles.subTitles}> Gramma: Future in the past.</Text>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}>-- {rowData.gramma.futureInPast}</Text>
                <Text style={styles.conteudo}>-- {rowData.gramma.futureInPast2}</Text>
            </View>
        </View> 
    );
}
export const capituloQuatro = rowData => {
    return (
        <View>
             <Text style={styles.subTitles}> Vocabulary: Talk about accidents and injuries.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.accidents}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.accidents1}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.accidents2}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.accidents3}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.accidents4}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.accidents5}</Text>
            </View>
             <Text style={styles.subTitles}> Saying how something happended.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.sayingHap}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.sayingHap1}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.sayingHap2}</Text>
            </View>
             <Text style={styles.subTitles}> Adverbs for telling stories.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.adverb}</Text>
            </View>
             <Text style={styles.subTitles}> Natural events.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.naturalEvent}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.naturalEvent1}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.naturalEvent2}</Text>
            </View>
             <Text style={styles.subTitles}> Gramar: Narrative verb forms.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.gramma.sp}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.sp1}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.sp2}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.gramma.pp}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.pp1}</Text>                        
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.gramma.pp2}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.pp3}</Text>
            </View>
            <Text style={styles.subTitles}>Keyword: Over.</Text>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.keywords.over}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over1}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over2}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over3}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over4}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.keywords.over5}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over6}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.keywords.over7}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over8}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.keywords.over9}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over10}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.keywords.over11}</Text>
                <Text style={styles.conteudo}> -- {rowData.keywords.over12}</Text>
            </View>
        </View>
    );
}
export const capituloTres = rowData => {
    return(
        <View>
            <Text style={styles.subTitles}> Vocabulary: Talking about hopes, dreams, ideas.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.hopeDream}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.hopeDream1}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.hopeDream2}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.hopeDream3}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.hopeDream4}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.hopeDream5}</Text>
            </View>
            <Text style={styles.subTitles}> Gramma: Present perfect and time expressions.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>{rowData.gramma.a}</Text>
                <Text style={styles.subTitlesIn}>{rowData.gramma.b}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.ppTimeExpress}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.ppTimeExpress1}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.ppTimeExpress2}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.ppTimeExpress3}</Text>
            </View>
            <Text style={styles.subTitles}> Gramma: Others examples of time expressions.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.gramma.phrasal}</Text>
            </View>
            <Text style={styles.subTitles}>{rowData.gramma.explain}</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.gramma.explainEx}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.explainEx1}</Text>
            </View>
            <Text style={styles.subTitles}>{rowData.gramma.explain2}</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.gramma.explainEx2}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.explainEx3}</Text>
            </View>
            <Text style={styles.subTitles}>Times expressions:</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.gramma.timeExpression}</Text>
            </View>
            <Text style={styles.subTitles}>Explanation: </Text>
             <View style={styles.ViewBackgroud}>
             <Text style={styles.subTitlesIn}>Always and never:</Text>
             <Text style={styles.conteudo}> -- {rowData.gramma.timeExpression1}</Text>
             <Text style={styles.subTitlesIn}>For and since:</Text>
             <Text style={styles.conteudo}> -- {rowData.gramma.timeExpression2}</Text>
             <Text style={styles.subTitlesIn}>Recently and just:</Text>
             <Text style={styles.conteudo}> -- {rowData.gramma.timeExpression3}</Text>
             <Text style={styles.subTitlesIn}>Yet:</Text>
             <Text style={styles.conteudo}> -- {rowData.gramma.timeExpression4}</Text>
             <Text style={styles.subTitlesIn}>Already:</Text>
             <Text style={styles.conteudo}> -- {rowData.gramma.timeExpression5}</Text>
             <Text style={styles.subTitlesIn}>Ever:</Text>
             <Text style={styles.conteudo}> -- {rowData.gramma.timeExpression6}</Text>
            </View>
        </View>
    );
}
export const capituloDois = rowData => {
    return (
        <View>
             <Text style={styles.subTitles}> Vocabulary: Expressing opinions.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.opinions}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.opinions1}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.opinions2}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.opinions3}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.opinions4}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.opinions5}</Text>
            </View>
            <Text style={styles.subTitles}> {rowData.vocaluraio.adjectives}</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.adjectives1}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.adjectives2}</Text>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.adjectives3}</Text>
            </View>
            <Text style={styles.subTitles}> Gramma: will, could, may and might </Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitles}> Will: to say you're sure.</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.will}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.willNot}</Text>
                <Text style={styles.subTitles}>May: to say you're not sure.</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.may}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.mayNot}</Text>
                <Text style={styles.subTitles}>Might: to say you're not sure.</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.might}</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.mightNot}</Text>
                <Text style={styles.subTitles}>Could: to say you're not sure.</Text>
                <Text style={styles.conteudo}> -- {rowData.gramma.could}</Text>
            </View>
            <Text style={styles.subTitles}>Vocabulary: Expressing probability.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> -- {rowData.vocaluraio.probability}</Text>
            </View>
            <Text style={styles.subTitles}>keyword: So and such: Such is a determiner; so is an adverb.</Text>
             <View style={styles.ViewBackgroud}>
                <Text style={styles.conteudo}> Right: {rowData.keywords.so}</Text>
                <Text style={styles.conteudo}> Wrong: {rowData.keywords.wrongSo}</Text>
                <Text style={styles.conteudo}> Right: {rowData.keywords.such}</Text>
                <Text style={styles.conteudo}> Wrong: {rowData.keywords.wrongSuch}</Text>
                <TouchableWithoutFeedback
                >
                    <Image 
                        source={rowData.keywords.img} 
                        resizeMode="contain"
                        style={{ width: 312, height:85, backgroundColor: '#CCC', marginBottom: 5 }}
                        overflow='hidden'
                        borderRadius={5}
                    />                    
                </TouchableWithoutFeedback> 
                <Button 
                    color="#000000"
                    title='Ver imagem.'
                    onPress={() => Actions.ImageElement(rowData.keywords.img)}
                />                                
            </View>   
        </View>
    );
}
export const capituloUm = rowData => {
    return (
        <View>
            <Text style={styles.subTitles}> Vocabulary: Habits and preferences.</Text>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitles}>Expression can be followed by noun:</Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.noun}</Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.noun1}</Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.noun2}</Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.noun3}</Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitles}>Expression can be followed by -ing form:</Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infForm} </Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infForm1} </Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infForm2} </Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infForm3} </Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitles}>Expression can be followed by an infinitive:</Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infinitive} </Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infinitive1} </Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infinitive2} </Text>
                <Text style={styles.conteudo}> {rowData.vocaluraio.infinitive3} </Text>
            </View>
                 <Text style={styles.subTitles}> Gramar: Talking about the present.</Text>
            <View style={styles.ViewBackgroud}>
                <Text style ={styles.subTitlesIn}>Present Simple:</Text>
                <Text style={styles.conteudo}> -- {rowData.grama.ps} </Text>
                <Text style={styles.conteudo}> -- {rowData.grama.ps1} </Text>
                <Text style={styles.conteudo}> -- {rowData.grama.ps2} </Text>
            </View>
            <View style={styles.ViewBackgroud}>
                <Text style={styles.subTitlesIn}>Present Progressive:</Text>
                <Text style={styles.conteudo}> -- {rowData.grama.pp} </Text>
                <Text style={styles.conteudo}> -- {rowData.grama.pp1} </Text>
                <Text style={styles.conteudo}> -- {rowData.grama.pp2} </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    subTitles: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5,
        paddingLeft: 5,
        fontSize: 18,
        color: 'white',
    },
    subTitlesIn:{
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 17,
        paddingLeft: 5,
        color: 'red',
        fontFamily: 'Quicksand Bold',
    },
    conteudo: {
        marginLeft: 6,
        fontSize: 16,
        marginBottom: 5,
        paddingTop: 3,
        color: 'white'
    },
    ViewBackgroud: {
        borderColor: '#311556',
        backgroundColor: '#311556',
        paddingLeft: 4,
        paddingBottom: 3,
        marginBottom: 9,
        borderRadius: 5,
        elevation: 2
    }
})