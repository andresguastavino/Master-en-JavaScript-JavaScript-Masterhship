import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public created_project: Project;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = 'Editar proyecto';
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProject(id)
    });
  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      response => {
        if(response.project) {
          this.project = response.project;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getProjectImage(fileName) {
    return this.url + 'get-image/' + fileName;
  }

  onSubmit(form) {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.projectUpdated) {

          // Subir la imagen
          if(this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.projectUpdated._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
              this.created_project = result.projectUpdated;
            });
          } else {
            this.created_project = response.projectUpdated;
          }

          this.status = 'success';
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
