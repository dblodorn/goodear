import { store } from './../store'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  find: find,
  findIndex: findIndex
})

const projectIndexes = (currentSlug, projects) => {
  const returnIndex = () => _.findIndex(projects, {
    slug: currentSlug,
  });
  const project = returnIndex();
  const prevProject = (project, projectCount) => {
    console.log(project);
    if (project === 0) {
      return projectCount - 1;
    } else {
      return project - 1;
    }
  };
  const nextProject = (project, projectCount) => {
    if (project === (projectCount - 1)) {
      return 0;
    } else {
      return project + 1;
    }
  };
  return {
    current_index: project,
    prev_project: prevProject(project, projects.length),
    next_project: nextProject(project, projects.length),
    project_count: projects.length,
  };
};

const setPage = (slug) => {
  return {
    type: 'SET_PAGE',
    slug
  }
}

const setVideoState = (data) => {
  return {
    type: 'VIDEO_PLAYING',
    data
  }
}

const setVideoPlaying = (data) => {
  return (dispatch) => {
    let currentVideo = null
    const videos = store.getState().videos
    if (data !== null) {
      currentVideo = _.find(videos, { slug: data })
    } else {
      currentVideo = null
    } 
    dispatch(setVideoState({
      video_index: projectIndexes(data, videos),
      video_data: currentVideo
    }))
  }
}

export {
  setPage,
  setVideoPlaying
}
