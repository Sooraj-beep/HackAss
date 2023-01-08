import React, {button, useState, useEffect} from 'react';

export const GeneratePrompt = (params) =>{
    let prompt = '';
    
    if (params.totalPeople) {
        prompt = prompt + "I have " + params.totalPeople + " members in my team\n";
    }
    if (params.languages) {
        prompt = prompt + "The programming languages I am most familiar with are: " + params.languages + "\n";
    }
    if (params.experience) {
        prompt = prompt + "I have " + params.experience + " years of experience with programming\n";
    }

    prompt = prompt + " Give me " + params.totalIdeas + " project ideas"
    if (params.duration) {
        prompt = prompt + " for a " + params.duration + " hackathon ";
    } else {
        prompt = prompt + " for a hackathon";
    }
    if (params.theme) {
        prompt = prompt + " with the theme " + params.theme;
    }

    //console.log(prompt);
    return prompt;

}


export const generatePromptTechincalResources = (params) => {

    let prompt = "List some technical resources to help me make my project: " + params;

    return prompt;

}
