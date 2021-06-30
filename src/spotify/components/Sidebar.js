import React from 'react'

import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../context/Provider';


const Sidebar = () => {
    const [{ playlists }, dispatch] = useStateValue();
    console.log('Playlists 👉', playlists);

    return (
        <Container>
            <Logo src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify White Logo" />

            <MobileLogo src="https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg" alt="Mobile Logo Spotify" />

            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Library" Icon={LibraryMusicIcon} />

            <br />
            <TitleStrong>Playlists</TitleStrong>
            <HR />
            { playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.id} title={playlist.name} />
            ))}
            {/* <SidebarOption title="Jesus is God" />
            <SidebarOption title="Soft Pop" />
            <SidebarOption title="Indie Jam" /> */}

        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    // border: 1px solid white;
    height: 100vh;
    flex: 0.2;
    background: #070131 !important;
    min-width: 230px;
    padding: 10px;
    overflow-y: hidden;

    @media (max-width: 768px) {
        min-width: 80px;
    }
`


const Logo = styled.img`
    height: 60px;
    object-fit: contain;
    margin-right: auto;
    padding: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`

const MobileLogo = styled(Logo)`
    height: 60px;
    display: none;
    padding: 0px;

    @media (max-width: 768px) {
        display: block;
    }
`

const TitleStrong = styled.strong`
    margin-left: 10px;
    padding: 5px;
    font-size: 12px;
    text-transform: uppercase;

    @media (max-width: 768px) {
        margin-left: 5px;
        padding-left: 3px;
    }
`

const HR = styled.hr`
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
`