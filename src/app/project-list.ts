import { Project } from './myProjects'

export const projects: Project[] = [
    { id: 1, name: 'Spectrum Analyzer Software for Raspberry-Pi', description: 'Designed a Software for real-time spectrum sensing using Spectrum Analyser & Raspberry-Pi in Python. Generated Spectrum Occupancy results for further use in dynamic spectrum allocation.', techUsed: 'Python, PyQt, Raspberry-Pi'},
    { id: 2, name: 'Mobile Broadband Service over Cognitive Radio Networks', description: 'Implemented Radio Environment Map through statistical interpolation base Kriging method in MATLAB. Collected data of PSD values at different locations using RF-Explorer for further post-processing.', techUsed: 'MATLAB'},
    { id: 3, name: 'My Chat', description: 'Created one on one chat with people through Google Sign In feature. This app designed for real-time syncing of data through Firebase web server.', techUsed: 'Android, JAVA'},
    { id: 4, name: 'News Feed', description: 'Used API to fetch trending news published by different broadcasters. Can see the detailed description with images by tapping the article.', techUsed: 'Android, JAVA'}
]