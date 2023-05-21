# practica-par

# Description

Welcome to the ``practica-par`` GitHub repository! This repo contains an interesting and innovative BigFoot simulator game implemented in several languages like Python, JavaScript, and C++ (partially). In the Python notebook you can find the following implementations: A standarised initial release that only provides a CLI output, a later remake supported by a deficient Python module (WxPython) that pretended to show the first release as an interactable user interface. In addition, there are several tries of automating the game by creating a function that returns the most optimal move in a given state of time or training a machine learning algorithm with Tensorflow/Pytorch based on reinforcement learning actor critic methods.

In contrast, this repo also contains additional implementations in JavaScript to enable the project code to be easily exported among different platforms, attached to an accurate and scalable UI like the web 3.0 or an interactive 3d graphics engine such as Unreal Engine, taking advantage of the worlds most advanced rendering and simulation technology to leverage the user experience when using the resulting game.

# Unreal Engine Project

The most advanced user interface implemented for this project is supported by Unreal Engine 5.0.3. This early version is used due to the compatibility requirements of the Unreal.js plugin, which enables the JavaScript code of the web version to be executed in runtime along with the corresponding C++ code for the Unreal actors and game mechanics. The embedding of JS code seems to be inefficient and complicated for the correct mantainance of the Unreal project. However, having the game rules defined in a single language is a significant advantage in productivity and unity of different implementations.

[![BigFoot Simulator Demo](https://img.youtube.com/vi/4YNKwOmJLVE/0.jpg)](https://www.youtube.com/watch?v=4YNKwOmJLVE)

# Requirements

In order to properly run this project, you will need the following software:

    Google Collab/ Python 3.8.5
    Visual Studio 2022
    Unreal Engine 5.0.3 with Unreal.js plugin
