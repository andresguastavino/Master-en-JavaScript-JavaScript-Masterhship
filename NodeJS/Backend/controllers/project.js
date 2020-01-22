'use strict'

var Project = require('../models/project')
var fs = require('fs')
var path = require('path')

var controller = {
  home: function(req, res) {
    return res.status(200).send({
      message: 'Soy el home'
    })
  },

  test: function(req, res) {
    return res.status(200).send({
      message: 'Soy el test'
    })
  },

  saveProject: function(req, res) {
    var project = new Project()

    var params = req.body
    project.name = params.name
    project.description = params.description
    project.category = params.category
    project.year = params.year
    project.languages = params.languages
    project.image = null

    project.save((error, projectStored) => {
      if(error) {
        return res.status(500).send({
          message: 'Error al guardar'
        })
      }

      if(!projectStored) {
        return res.status(404).send({
          message: 'No se ha podido guardar el proyecto'
        })
      }

      return res.status(200).send({
        project: projectStored
      })
    })
  },

  getProject: function(req, res) {
    var projectId = req.params.id

    if(!projectId) {
      return res.status(404).send({
        message: 'El proyecto no existe'
      })
    }

    Project.findById(projectId, (error, project) => {
      if(error) {
        return res.status(500).send({
          message: 'Error al devolver los datos'
        })
      }

      if(!project) {
        return res.status(404).send({
          message: 'El proyecto no existe'
        })
      }

      return res.status(200).send({
        project
      })
    })
  },

  getProjects: function(req, res) {
    Project.find({}).sort('name').exec((error, projects) => {
      if(error) {
        return res.status(500).send({
          message: 'Error al devolver los datos'
        })
      }

      if(!projects) {
        return res.status(404).send({
          message: 'No existen proyectos'
        })
      }

      return res.status(200).send({
        projects
      })
    })
  },

  updateProject: function(req, res) {
    var projectId = req.params.id

    var update = req.body

    Project.findByIdAndUpdate(projectId, update, {new:true}, (error, projectUpdated) => {
      if(error) {
        return res.status(500).send({
          message: 'Error al actualizar el proyecto'
        })
      }

      if(!projectUpdated) {
        return res.status(404).send({
          message: 'Proyecto no encontrado'
        })
      }

      return res.status(200).send({
        projectUpdated
      })
    })
  },

  deleteProject: function(req, res) {
    var projectId = req.params.id

    Project.findByIdAndRemove(projectId, (error, projectDeleted) => {
      if(error) {
        return res.status(500).send({
          message: 'Error al eliminar el proyecto'
        })
      }

      if(!projectDeleted) {
        return res.status(404).send({
          message: 'Proyecto no encontrado'
        })
      }

      return res.status(200).send({
        projectDeleted
      })
    })
  },

  uploadImage: function(req, res) {
    var projectId = req.params.id
    var fileName = 'Imagen no subida'

    if(req.files) {
      var filePath = req.files.image.path
      var fileSplit = filePath.split('\\')
      var fileName = fileSplit[1]
      var extSplit = fileName.split('.')
      var fileExt = extSplit[1]

      if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {

        Project.findByIdAndUpdate(projectId, { image:fileName }, { new:true }, (error, projectUpdated) => {
          if(error) {
            fs.unlinkSync(filePath)

            return res.status(500).send({
              message: 'Error al actualizar la imagen del proyecto'
            })
          }

          if(!projectUpdated) {
            fs.unlinkSync(filePath)

            return res.status(404).send({
              message: 'Proyecto no encontrado'
            })
          }

          return res.status(200).send({
            projectUpdated
          })
        })
      } else {
        fs.unlink(filePath, (error) => {
          return res.status(200).send({
            message: 'La extension del archivo no es valida'
          })
        })
      }
    } else {
      return res.status(500).send({
        message: 'No se han subido archivos'
      })
    }
  },

  getImageFile: function(req, res) {
    var file = req.params.image
    var path_file = './uploads/'+file

    fs.exists(path_file, (exists) => {
      if(exists) {
        return res.sendFile(path.resolve(path_file))
      } else {
        return res.status(500).send({
          message: 'No existe la imagen...'
        })
      }
    })
  }
}

module.exports = controller
