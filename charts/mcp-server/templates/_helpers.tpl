{{/*
Expand the name of the chart.  */}}
{{- define "mcp-server.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name. */}}
{{- define "mcp-server.fullname" -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- $fullname := printf "%s-%s" .Release.Name $name -}}
{{- trunc 63 $fullname | trimSuffix "-" -}}
{{- end -}}

{{/*
Return the chart name and version. */}}
{{- define "mcp-server.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version -}}
{{- end -}}

{{/*
Labels */}}
{{- define "mcp-server.labels" -}}
app.kubernetes.io/name: {{ include "mcp-server.name" . }}
helm.sh/chart: {{ include "mcp-server.chart" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}} 