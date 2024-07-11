from fastapi import APIRouter, Depends, HTTPException, status

from ..models import Project, Tool
from ..services.codegen_service import CodegenService
from ..dependencies import get_codegen_service, oauth2_scheme

router = APIRouter()

@router.post('', summary="Generated Python code for a project")
async def api_code_gen(project: Project, token: str = Depends(oauth2_scheme), service: CodegenService = Depends(get_codegen_service)):
  if not token:
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
    )

  code = service.project2py(project)
  return { 'code': code }

@router.post('/tool', summary="Generated tool code in Python based on prompts")
async def api_code_gen_tool(tool: Tool, token: str = Depends(oauth2_scheme), service: CodegenService = Depends(get_codegen_service)):
  if not token:
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
    )

  generatedFunc = service.tool2py(tool)
  return generatedFunc