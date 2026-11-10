#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
mkdir -p build
# Algumas instalações fornecem o motor, mas ainda não geraram xelatex.fmt.
# Inicializa somente um formato local ao build, sem alterar o TeX do sistema.
if ! kpsewhich -engine=xetex xelatex.fmt >/dev/null 2>&1; then
  mkdir -p build/formats
  if [[ ! -s build/formats/xelatex.fmt ]]; then
    xetex -ini -etex -no-shell-escape -interaction=nonstopmode -halt-on-error \
      -jobname=xelatex -output-directory=build/formats xelatex.ini
  fi
  export TEXFORMATS="$PWD/build/formats//:${TEXFORMATS:-}"
fi
latexmk -xelatex -no-shell-escape -interaction=nonstopmode -halt-on-error \
  -file-line-error -outdir=build -jobname=Principios_de_Solucao_Equipe_2 main.tex
cp -- build/Principios_de_Solucao_Equipe_2.pdf Principios_de_Solucao_Equipe_2.pdf
