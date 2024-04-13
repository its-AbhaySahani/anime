
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Watch() {
      const { id, name } = useParams();
      const [videoUrl, setVideoUrl] = useState("");
      const [animePahe,setAnimePahe] = useState({
            provider:'',
            watchId:'',
            episodeNo:'',
      });
      const [zoro,setZoro] = useState([]);
      const [gogoanime,setGogoanime] = useState({
            provider:'',
            episodes:[],
      
      });

      console.log(id, name);

      const fetchEpisodes = async (id) => {
            try{

                  const responseEpisode = await axios.get(`https://api.anify.tv/episodes?id=${id}`);
                  console.log(responseEpisode.data);
                  const providers=responseEpisode.data;
                  for(let i=0;i<providers.length;i++){
                        if(providers[i].providerId==="gogoanime"){
                              setGogoanime({
                                    ...gogoanime,
                                    provider:providers[i].providerId,
                                    episodes:providers[i].episodes,
                              });
                        }
                  }   
            }
            catch(error){
                  console.log(error);
            }     
      }
      console.log( gogoanime);

      const fetchStreamLinks = async (provider, watchId,episodeNo) => {

            const links=await axios.get(`https://api.anify.tv/sources?providerId=gogoanime&watchId=${encodeURIComponent(watchId)}&episodeNumber=${episodeNo}&id=${id}&subType=sub&server=gogocdn`);
            console.log(links.data);
            console.log(links.data.sources[3].url);
            setVideoUrl(links.data.sources[3].url);
      }

      useEffect(() => {
            fetchEpisodes(id);
      },[]);
      const episodes = gogoanime.episodes.map((episode) => {
            return (
                  <button key={episode.id} onClick={() => fetchStreamLinks(gogoanime.provider, episode.id, episode.number)}>{episode.title}</button>
            )
      });

      return (
            <div>
                  <h1>Hello Video</h1>
                  <StyledContainer>
                  <StyledEpisodeList>
                        {episodes}
                  </StyledEpisodeList>
                  <div>

                  {videoUrl && <ReactPlayer url={videoUrl} controls />}
                  </div>
                  </StyledContainer>
            </div>
                 
      )
}


const StyledContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;

div{
      border: 2px solid red;
}
`

const StyledEpisodeList = styled.div`
display: flex;
flex-direction: column;
width: 150px;
// flex-wrap: wrap;
height: 80vh;
overflow-y: scroll;

button {
      // margin: 1px 0;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 600;
     
}
`






export default Watch;